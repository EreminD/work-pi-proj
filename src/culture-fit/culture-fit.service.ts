import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CultureFit } from 'src/db/entity/culture-fit.entity';
import { Repository } from 'typeorm';
import { CreateCultureFitInput } from './dto/create-culture-fit.input';
import { UpdateCultureFitInput } from './dto/update-culture-fit.input';

@Injectable()
export class CultureFitService {
  constructor(@InjectRepository(CultureFit) private readonly capsRepository: Repository<CultureFit>) {}
  
  findAll(): Promise<Array<CultureFit>> {
    return this.capsRepository.find()
  }

  findOne(id: number): Promise<CultureFit> {
    return this.capsRepository.findOne(id)
  }

  remove(id: number) {
    return this.capsRepository.delete(id)
  
  }

  create(createCultureFitInput: CreateCultureFitInput) {
    return this.capsRepository.save(createCultureFitInput);
  }

  update(id: number, updateCultureFitInput: UpdateCultureFitInput) {
    return `This action updates a #${id} cultureFit`;
  }

 
}
