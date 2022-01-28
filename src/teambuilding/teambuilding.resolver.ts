import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/jwt.guard';
import { Teambuilding } from 'src/db/entities/teambuilding.entity';
import { CreateTeambuildingInput } from './dto/create-teambuilding.input';
import { UpdateTeambuildingInput } from './dto/update-teambuilding.input';
import { TeambuildingService } from './teambuilding.service';

@Resolver('teambuilding')
export class TeambuildingResolver {
  constructor(private readonly teambuildingService: TeambuildingService) {}

  @Query(() => [Teambuilding])
  @UseGuards(GqlAuthGuard)
  geAllTeambuildings() {
    return this.teambuildingService.findAll();
  }

  @Query(() => Teambuilding)
  @UseGuards(GqlAuthGuard)
  getTeambuildingById(@Args('id', { type: () => Int }) id: number) {
    return this.teambuildingService.findOne(id);
  }
  
  @Mutation(() => Teambuilding)
  @UseGuards(GqlAuthGuard)
  createTeambulding(@Args('createTeambuldingInput') createTeambuldingInput: CreateTeambuildingInput) {
    return this.teambuildingService.create(createTeambuldingInput);
  }

  @Mutation(() => Teambuilding)
  @UseGuards(GqlAuthGuard)
  updateTeambulding(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTeambuldingInput') updateTeambuldingInput: UpdateTeambuildingInput
    ) {
    return this.teambuildingService.update(id, updateTeambuldingInput);
  }

  @Mutation(() => Teambuilding)
  @UseGuards(GqlAuthGuard)
  removeTeambulding(@Args('id', { type: () => Int }) id: number) {
    return this.teambuildingService.remove(id);
  }
}
