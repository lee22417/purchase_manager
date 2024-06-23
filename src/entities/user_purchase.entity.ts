import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({ nullable: false, length: 100 })
  user_id: string;

  @Column({ nullable: false })
  product_id: number;

  @Column({ nullable: false })
  status: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
