import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 300 })
  session_id: string;

  @Column({ nullable: false })
  expired_at: number;

  @Column({ nullable: false })
  data: Text;
}
