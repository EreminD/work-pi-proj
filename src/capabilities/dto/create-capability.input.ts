import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCapabilityInput {
  @Field()
  isActive: boolean;
  
  @Field()
  capability: string;
  
  @Field()
  createdAt: Date;
}
