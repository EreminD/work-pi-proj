import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'config/db.config'
import { ReferenceEntity } from './entity/reference.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: db.type,
        host: db.host,
        port: db.port,
        username: db.username,
        password: db.password,
        database: db.database,
        entities: [ReferenceEntity],
        synchronize: false,
      }),
    ],
  })
export class DbModule {}
