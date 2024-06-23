import { Injectable } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput } from './user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user'; // TODO:
  }

  update(no: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${no} user`; // TODO:
  }

  remove(id: number) {
    return `This action removes a #${id} user`; // TODO:
  }
}
