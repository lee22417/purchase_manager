import { Field, ObjectType, InputType, Int } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => Int)
  no: number;

  @Field()
  id: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  created_at: Date;
}

@InputType()
export class CreateUserInput {
  @Field()
  id: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  no: number;

  @Field()
  id: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
