import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Capabilities } from './db/entity/capabilities.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Capabilities) private readonly capsRepository: Repository<Capabilities>) {}

  getHello(): any {
    return this.capsRepository.find()
  }
}
