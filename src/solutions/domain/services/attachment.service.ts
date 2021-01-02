import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Attachment } from "../entities/attachment.entity";
import { IUploader } from "./IUploader.interface";

@Injectable()
export class AttachmentService {
    constructor(
        @InjectRepository(Attachment)
        private attachmentRepository: Repository<Attachment>,
      ) { }
    
      async saveAttachment(uploaderService : IUploader, file) {

        const fileUploaded = await uploaderService.singleFileUploadResolver(file);
        console.log(fileUploaded);
        const attachment : Attachment = new Attachment();
        
        attachment.filename = fileUploaded.filename;
        attachment.url = fileUploaded.url;
        attachment.mimetype = fileUploaded.mimetype;
        attachment.encoding = fileUploaded.encoding;

        return this.attachmentRepository.save(attachment);
      }
}