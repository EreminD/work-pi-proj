import { CreateCapabilityInput } from './create-capability.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCapabilityInput extends PartialType(CreateCapabilityInput) {
  @Field()
  isActive: boolean;
  
  @Field()
  capability: string;
  
  @Field()
  createdAt: Date;
}
