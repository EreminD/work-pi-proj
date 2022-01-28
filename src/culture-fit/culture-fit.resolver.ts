import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { CultureFitService } from './culture-fit.service';
import { CultureFit } from './entities/culture-fit.entity';
import { CreateCultureFitInput } from './dto/create-culture-fit.input';
import { UpdateCultureFitInput } from './dto/update-culture-fit.input';
import { PubSub } from 'graphql-subscriptions';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt.guard';

@Resolver('cultureFit')
export class CultureFitResolver {
  private pubSub = new PubSub()
  
  constructor(private readonly cultureFitService: CultureFitService) {}

  @Query(returns => [CultureFit])
  @UseGuards(GqlAuthGuard)
  getAllCultureFit() {
    return this.cultureFitService.findAll();
  }

  @Query(returns => CultureFit)
  @UseGuards(GqlAuthGuard)
  getCultureFitById(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.cultureFitService.findOne(id);
  }

  @Mutation(returns => CultureFit, {name: 'removeOne'})
  @UseGuards(GqlAuthGuard)
  removeCultureFit(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.cultureFitService.remove(id);
  }

  @Mutation(() => CultureFit)
  @UseGuards(GqlAuthGuard)
  createCultureFit(
    @Args('createCultureFitInput') createCultureFitInput: CreateCultureFitInput
  ) 
  {
    return this.cultureFitService.create(createCultureFitInput)
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  updateCultureFit(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCultureFitInput') updateCultureFitInput: UpdateCultureFitInput
  ) 
  {
    return this.cultureFitService.update(id, updateCultureFitInput);
  }
}

