import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  name: string;

  @Column({ nullable: false })
  category_id: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
