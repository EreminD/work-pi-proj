import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from 'config/db.config'
import { Capabilities } from './entities/capabilities.entity';
import { CultureFit } from './entities/culture-fit.entity';
import { PerformanceReview } from './entities/performance-review.entity';
import { PersonalityTest } from './entities/personality-test.entity';
import { Refs } from './entities/refs.entity';
import { SelfReflection } from './entities/self-reflection.entity';
import { TeamBuilding } from './entities/teambuilding.entity';
import { User } from './entities/user.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: db.type,
        host: db.host,
        port: db.port,
        username: db.username,
        password: db.password,
        database: db.database,
        entities: [Capabilities, CultureFit, PerformanceReview, PersonalityTest, Refs, SelfReflection, TeamBuilding, User],
        synchronize: true,
      }),
    ],
  })
export class DbModule {}
