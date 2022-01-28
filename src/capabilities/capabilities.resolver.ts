import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CapabilitiesService } from './capabilities.service';
import { CreateCapabilityInput } from './dto/create-capability.input';
import { UpdateCapabilityInput } from './dto/update-capability.input';
import { GqlAuthGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { Capabilities } from 'src/db/entities/capabilities.entity';

@Resolver('capability')
export class CapabilitiesResolver {
  constructor(private readonly capabilitiesService: CapabilitiesService) {}

  @Query(returns => [Capabilities])
  @UseGuards(GqlAuthGuard)
  getAllCapabilities() {
    return this.capabilitiesService.findAll();
  }

  @Query(returns => [Capabilities])
  @UseGuards(GqlAuthGuard)
  getActiveCapabilities() {
    return this.capabilitiesService.findActive();
  }

  @Query(returns => Capabilities)
  @UseGuards(GqlAuthGuard)
  getCapabilityById(@Args('id', { type: () => Int }) id: number) {
    return this.capabilitiesService.findOne(id);
  }

  @Mutation(() => Capabilities)
  @UseGuards(GqlAuthGuard)
  updateCapability(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCapabilityInput') updateCapabilityInput: UpdateCapabilityInput
  ) {
    return this.capabilitiesService.update(id, updateCapabilityInput);
  }

  @Mutation(() => Capabilities)
  @UseGuards(GqlAuthGuard)
  removeCapability(@Args('id', { type: () => Int }) id: number) {
    return this.capabilitiesService.remove(id);
  }

  @Mutation(() => Capabilities)
  @UseGuards(GqlAuthGuard)
  createCapability(@Args('createCapabilityInput') createCapabilityInput: CreateCapabilityInput) {
    return this.capabilitiesService.create(createCapabilityInput);
  }
}
