import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1643306177877 implements MigrationInterface {
    name = 'teste1643306177877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "OrdersFK"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "ProductsFK"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UserFK"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "orderOrdersId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "orderId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "productsId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "productsId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "unitePrice"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "unitePrice" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "totalPrice" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_59a2a83df0dc22d344646cc048f" FOREIGN KEY ("orderOrdersId") REFERENCES "orders"("ordersId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_4eff63e89274f79195e25c5c115" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_c6c2785c13b07ddbc4a9792770a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_c6c2785c13b07ddbc4a9792770a"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_4eff63e89274f79195e25c5c115"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_59a2a83df0dc22d344646cc048f"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "totalPrice" numeric(5,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "unitePrice"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "unitePrice" numeric(5,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "productsId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "productsId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "orderId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "orderOrdersId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UserFK" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "ProductsFK" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "OrdersFK" FOREIGN KEY ("orderId") REFERENCES "orders"("ordersId") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
