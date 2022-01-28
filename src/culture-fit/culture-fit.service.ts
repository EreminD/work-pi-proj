import { Injectable } from '@nestjs/common';
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
    console.log(`CultureFit by id: ${id}`)
    return this.cultureFitRepository.findOne(id)
  }

  remove(id: number) {
    console.log(`Delete CultureFit by id: ${id}`)
    this.cultureFitRepository.delete(id)

  }

  create(createCultureFitInput: CreateCultureFitInput) {
    console.log(`Create new CultureFit`)
    console.log(createCultureFitInput)
    return this.cultureFitRepository.save(createCultureFitInput);
  }

  update(id: number, updateCultureFitInput: UpdateCultureFitInput) {
    console.log(`Update CultureFit ${id}`)
    console.log(updateCultureFitInput)

    return this.cultureFitRepository.save({
      id: id,
      name: updateCultureFitInput.name,
      createdAt: updateCultureFitInput.createdAt
      
})
  } 
}
