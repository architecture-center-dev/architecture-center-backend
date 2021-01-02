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
         file  :  Promise<File> 
    ) => Promise<UploadedFileResponse>;
}