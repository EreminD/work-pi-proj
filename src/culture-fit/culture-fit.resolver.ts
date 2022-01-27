import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CultureFitService } from './culture-fit.service';
import { CultureFit } from './entities/culture-fit.entity';
import { CreateCultureFitInput } from './dto/create-culture-fit.input';
import { Observable } from 'rxjs';

@Resolver('cultureFir')
export class CultureFitResolver {
  constructor(private readonly cultureFitService: CultureFitService) {}

  @Mutation(() => CultureFit)
  createCultureFit(@Args('createCultureFitInput') createCultureFitInput: CreateCultureFitInput) {
    console.log(createCultureFitInput)
    return this.cultureFitService.create(createCultureFitInput);
  }

  @Query(returns => [CultureFit])
  findAll() {
    return this.cultureFitService.findAll();
  }

  @Query(returns => CultureFit)
  findOne(
    @Args('id', { type: () => Int }) id: number
    ) {
    return this.cultureFitService.findOne(id);
  }

  @Mutation(returns => CultureFit, {name: 'removeOne'})
  removeCultureFit(
    @Args('id', { type: () => Int }) id: number
    ) {
      console.log(`Deleting CultureFit ${id}`)
      return this.cultureFitService.remove(id);
  }
}
