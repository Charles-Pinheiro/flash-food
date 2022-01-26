import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import ProductCategory from "./ProductCategories";
import Store from "./Stores";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => ProductCategory)
  @JoinColumn()
  category: ProductCategory;

  @ManyToOne(() => Store)
  @JoinColumn()
  store: Store;
}
