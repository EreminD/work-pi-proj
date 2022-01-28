import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Capabilities } from 'src/db/entities/capabilities.entity';
import { Repository } from 'typeorm';
import { CreateCapabilityInput } from './dto/create-capability.input';
import { UpdateCapabilityInput } from './dto/update-capability.input';

@Injectable()
export class CapabilitiesService {
  constructor(@InjectRepository(Capabilities) private readonly capsRepository: Repository<Capabilities>) {}
  
  findActive(): Promise<Array<Capabilities>> {
    return this.capsRepository.find({isActive: true})
  }
  create(createCapabilityInput: CreateCapabilityInput) {
    return this.capsRepository.save(createCapabilityInput);
  }

  findAll(): Promise<Array<Capabilities>> {
    return this.capsRepository.find()
  }

  findOne(id: number): Promise<Capabilities> {
    return this.capsRepository.findOne(id)
  }

  update(id: number, updateCapabilityInput: UpdateCapabilityInput) {
    return this.capsRepository.save({
      id: id,
      name: updateCapabilityInput.capability,
      createdAt: updateCapabilityInput.createdAt,
      isActive: updateCapabilityInput.isActive
  })
}

  remove(id: number) {
    console.log(`Delete CultureFit by id: ${id}`)
    this.capsRepository.delete(id)
  }
}
