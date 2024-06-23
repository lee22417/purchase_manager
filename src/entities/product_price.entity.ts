import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  product_id: number;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  is_expired: number;

  @Column({ nullable: true })
  expired_at: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
