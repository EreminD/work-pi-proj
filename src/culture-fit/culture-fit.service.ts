import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CultureFit } from 'src/db/entities/culture-fit.entity';
import { CreateCultureFitInput } from './dto/create-culture-fit.input';
import { UpdateCultureFitInput } from './dto/update-culture-fit.input';

@Injectable()
export class CultureFitService {
  constructor(@InjectRepository(CultureFit) private readonly cultureFitRepository: Repository<CultureFit>) {}
  
  findAll(): Promise<Array<CultureFit>> {
    return this.cultureFitRepository.find()
  }

  findOne(id: number): Promise<CultureFit> {
    return this.cultureFitRepository.findOne(id)
  }

  async remove(id: number) {
    const cf = await this.findOne(id);
    if (!cf){
      throw new HttpException(`No such CultureFit: ${id}`, 404)
    }
    this.cultureFitRepository.delete(id);
    return cf;
  }

  create(createCultureFitInput: CreateCultureFitInput) {
    return this.cultureFitRepository.save(createCultureFitInput);
  }

  update(id: number, updateCultureFitInput: UpdateCultureFitInput) {
    return this.cultureFitRepository.save({
      id: id,
      name: updateCultureFitInput.name,
      createdAt: updateCultureFitInput.createdAt
    })
  } 
}
