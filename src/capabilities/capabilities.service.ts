import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Capabilities } from 'src/db/entities/capabilities.entity';
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

  async remove(id: number) {
    const cap = await this.findOne(id)
    if (!cap) {
      throw new HttpException(`No such Capability: ${id}`, 404)
    }
    this.capsRepository.delete(id)
    return cap;
  }
}
