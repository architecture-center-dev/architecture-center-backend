import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Attachment } from "../entities/attachment.entity";
import { Solution } from "../entities/solution.entity";
import { IUploader } from "./IUploader.interface";
import {ObjectID} from "mongodb"

@Injectable()
export class AttachmentService {
    constructor(
        @InjectRepository(Attachment)
        private attachmentRepository: Repository<Attachment>,
        @InjectRepository(Solution)
        private solutionRepository: Repository<Solution>,
      ) { }
    
      async saveAttachment(solution_id: String, file, uploaderService : IUploader) : Promise<Attachment> {

        const {filename, url, mimetype, encoding} = await uploaderService.singleFileUploadResolver(file);

        const attachment : Attachment = new Attachment();
        
        attachment.filename = filename;
        attachment.url = url;
        attachment.mimetype = mimetype;
        attachment.encoding = encoding;

        const attachmentSaved: Attachment = await this.attachmentRepository.save(attachment);

        const solution : Solution = await this.solutionRepository.findOne(new ObjectID(solution_id as string));
        solution.big_picture = attachmentSaved.url;
        
        await this.solutionRepository.save(solution);

        return attachmentSaved;
      }
}