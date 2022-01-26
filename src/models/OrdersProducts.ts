import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Orders from "./Orders";
import Product from "./Products";

@Entity("orders_products")
export default class OrdersProducts {
  @PrimaryGeneratedColumn("uuid")
  ordersProductsId: string;

  @ManyToOne(() => Orders)
  order: Orders;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column()
  ordersId: number;

  @Column()
  productsId: number;

  @Column()
  unitPrice: number;

  @Column()
  quantity: number;
}
