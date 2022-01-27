import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import OrdersProducts from "./OrdersProducts";
import Product from "./Products";
import User from "./Users";

@Entity("orders")
export default class Orders {
  @PrimaryGeneratedColumn("uuid")
  ordersId: string;

  @Column()
  usersId: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  totalPrice: number;

  @OneToMany(() => OrdersProducts, (OrdersProducts) => OrdersProducts.order, {
    eager: true,
  })
  products: Product[];

  @ManyToOne(() => User)
  @JoinColumn()
  users: User;
}
