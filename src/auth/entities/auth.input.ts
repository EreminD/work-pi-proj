import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AuthInput {
    @Field()
    username: string
    @Field()
    pass: string
}