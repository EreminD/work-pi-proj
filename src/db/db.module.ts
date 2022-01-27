import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'config/db.config'
import { Capabilities } from './entity/capabilities.entity';
import { CultureFit } from './entity/culture-fit.entity';
import { PerformanceReview } from './entity/performance-review.entity';
import { PersonalityTest } from './entity/personality-test.entity';
import { Refs } from './entity/refs.entity';
import { SelfReflection } from './entity/self-reflection.entity';
import { TeamBuilding } from './entity/teambuilding.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: db.type,
        host: db.host,
        port: db.port,
        username: db.username,
        password: db.password,
        database: db.database,
        entities: [Capabilities, CultureFit, PerformanceReview, PersonalityTest, Refs, SelfReflection, TeamBuilding],
        synchronize: true,
      }),
    ],
  })
export class DbModule {}
