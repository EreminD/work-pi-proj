import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReferenceEntity } from './db/entity/reference.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(ReferenceEntity) private readonly refRepository: Repository<ReferenceEntity>) {}

  getHello(): any {
    return this.refRepository.find()
  }
}
