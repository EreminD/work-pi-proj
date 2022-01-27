import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ReferenceEntity } from './db/entity/reference.entity';

@Module({
  imports: [DbModule, TypeOrmModule.forFeature([ReferenceEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
