import { Exclude } from "class-transformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Orders from "./Orders";
import Product from "./Products";

@Entity("orders_products")
export default class OrdersProducts {
  @Exclude()
  @PrimaryGeneratedColumn("uuid")
  ordersProductsId: string;

  @ManyToOne(() => Orders)
  order?: Orders;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Exclude()
  @Column()
  orderId: string;

  @Exclude()
  @Column()
  productsId: string;

  @Exclude()
  @Column("decimal", { precision: 5, scale: 2 })
  unitePrice: number;

  @Column()
  quantity: number;
}
