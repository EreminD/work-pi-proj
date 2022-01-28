import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../db/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
  
  async findByName(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({name: username});
  }

  async findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({id});
  }
}