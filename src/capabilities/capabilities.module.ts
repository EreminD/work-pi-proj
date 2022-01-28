import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapabilitiesService } from './capabilities.service';
import { CapabilitiesResolver } from './capabilities.resolver';
import { Capabilities } from 'src/db/entities/capabilities.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  providers: [CapabilitiesResolver, CapabilitiesService],
  imports: [ TypeOrmModule.forFeature([Capabilities]), AuthModule]
})
export class CapabilitiesModule {}
