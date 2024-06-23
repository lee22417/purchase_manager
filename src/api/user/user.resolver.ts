import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput, UpdateUserInput, UserType } from './user.dto';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType], { name: 'getUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserType, { name: 'getUserById' })
  findById(@Args('id', { type: () => String }) id: string) {
    if (typeof id !== 'string') {
      throw new Error('ID must be a string');
    }
    return this.userService.findById(id);
  }

  @Mutation(() => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => UserType)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.no, updateUserInput);
  }

  @Mutation(() => UserType)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
