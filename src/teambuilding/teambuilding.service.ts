import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teambuilding } from 'src/db/entities/teambuilding.entity';
import { CreateTeambuildingInput } from './dto/create-teambuilding.input';
import { UpdateTeambuildingInput } from './dto/update-teambuilding.input';


@Injectable()
export class TeambuildingService {
  constructor(@InjectRepository(Teambuilding) private readonly teambuildingRepository: Repository<Teambuilding>) {}
  

  create(createTeambuldingInput: CreateTeambuildingInput) {
    return this.teambuildingRepository.save(createTeambuldingInput);
  }

  findAll(): Promise<Array<Teambuilding>> {
    return this.teambuildingRepository.find()
  }

  findOne(id: number): Promise<Teambuilding> {
    return this.teambuildingRepository.findOne(id)
  }


  async update(id: number, updateTeambuildingInput: UpdateTeambuildingInput) {
    return this.teambuildingRepository.save({
      id: id,
      eventName!: updateTeambuildingInput.eventName,
      eventDate: updateTeambuildingInput.eventDate,
      participants: updateTeambuildingInput.participants,
      createdAt!: updateTeambuildingInput.createdAt
    })
    
  }

  async remove(id: number) {
    const tb = await this.findOne(id);
    if (!tb){
      throw new HttpException(`No such CultureFit: ${id}`, 404)
    }
    this.teambuildingRepository.delete(id);
    return tb;
  }
}
