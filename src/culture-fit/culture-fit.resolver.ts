import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CultureFitService } from './culture-fit.service';
import { CreateCultureFitInput } from './dto/create-culture-fit.input';
import { UpdateCultureFitInput } from './dto/update-culture-fit.input';
import { GqlAuthGuard } from 'src/auth/jwt.guard';
import { CultureFit } from 'src/db/entities/culture-fit.entity';

@Resolver('cultureFit')
export class CultureFitResolver {
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

  @Mutation(() => CultureFit)
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

  @Mutation(() => CultureFit)
  @UseGuards(GqlAuthGuard)
  updateCultureFit(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCultureFitInput') updateCultureFitInput: UpdateCultureFitInput
  ) 
  {
    return this.cultureFitService.update(id, updateCultureFitInput);
  }
}

