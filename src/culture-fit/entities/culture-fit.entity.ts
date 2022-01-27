import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class CultureFit {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: number;
  @Field()
  name: string;
  @Field()
  createdAt: Date;
}
