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
import User from "./Users";

@Entity("orders")
export default class Orders {
  @PrimaryGeneratedColumn("uuid")
  ordersId: string;

  // @Column()
  // productId: number;

  @Column()
  userId: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  totalPrice: number;

  @OneToMany(() => OrdersProducts, (OrdersProducts) => OrdersProducts.order, {
    eager: true,
  })
  products: OrdersProducts[];

  @ManyToOne(() => User)
  @JoinColumn()
  users: User;
}
