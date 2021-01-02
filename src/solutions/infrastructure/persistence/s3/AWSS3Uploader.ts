import {S3, Credentials} from "aws-sdk";
import stream, {PassThrough} from "stream"

type S3UploadConfig = {
  accessKeyId: string;
  secretAccessKey: string;
  destinationBucketName: string;
  region?: string;
};

type S3UploadStream = {
    writeStream: stream.PassThrough;
    promise: Promise<AWS.S3.ManagedUpload.SendData>;
  };

export type File = {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream?: any;
  }
  
  export type UploadedFileResponse = {
    filename: string;
    mimetype: string;
    encoding: string;
    url: string;
  }
  
  export interface IUploader {
    singleFileUploadResolver: (
     { file } : { file: Promise<File> }
    ) => Promise<UploadedFileResponse>;
  }

export class AWSS3Uploader implements IUploader{
  private s3: AWS.S3;
  public config: S3UploadConfig;

  constructor(config: S3UploadConfig) {
    const credentials = new Credentials({
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey
    });

    this.s3 = new S3();
    this.config = config;
  }

  private createDestinationFilePath(
    fileName: string,
    mimetype: string,
    encoding: string
  ): string {
    return fileName;
  }

  private createUploadStream(key: string): S3UploadStream {
    const pass = new PassThrough();
    return {
      writeStream: pass,
      promise: this.s3
        .upload({
          Bucket: this.config.destinationBucketName,
          Key: key,
          Body: pass
        })
        .promise()
    };
  }

  async singleFileUploadResolver(
    { file }: { file: Promise<File> }
  ): Promise<UploadedFileResponse> {

    const { createReadStream, filename, mimetype, encoding } = await file;
    
   // Create the destination file path
    const filePath = this.createDestinationFilePath(
      filename,
      mimetype,
      encoding
    );
    
    // Create an upload stream that goes to S3
    const uploadStream = this.createUploadStream(filePath);

    // Pipe the file data into the upload stream
    const fileStream = createReadStream();

    fileStream.pipe(uploadStream.writeStream);

    // Start the stream
    const result: AWS.S3.ManagedUpload.SendData = await uploadStream.promise;

    // Get the link representing the uploaded file
    // (optional) save it to our database

    return { filename, mimetype, encoding, url: result.Location };
  }
}