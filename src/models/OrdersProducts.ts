import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne
} from "typeorm";
import Orders from "./Orders";
import Product from "./Products";


@Entity("orders_products")
export default class OrdersProducts {
    @Column()
    ordersId: number;

    @Column()
    productId: number;

    @Column()
    unitePrice: number;
    
    @Column()
    quantity: number;


    @ManyToOne(() => Orders)
    @JoinColumn()
    orders: Orders;

    @ManyToOne(() => Product)
    @JoinColumn()
    product: Product;
}