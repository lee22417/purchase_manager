import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ nullable: false, length: 100 })
  id: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, length: 100 })
  name: string;

  @Column({ nullable: false, length: 100 })
  email: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
