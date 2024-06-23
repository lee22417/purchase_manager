import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  code: number;

  @Column({ nullable: false, length: 100 })
  name: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
