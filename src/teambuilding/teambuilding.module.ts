import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teambuilding } from 'src/db/entities/teambuilding.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TeambuildingResolver } from './teambuilding.resolver';
import { TeambuildingService } from './teambuilding.service';

@Module({
  providers: [TeambuildingResolver, TeambuildingService],
  imports: [ TypeOrmModule.forFeature([Teambuilding]), AuthModule]
})
export class TeambuldingModule {}
