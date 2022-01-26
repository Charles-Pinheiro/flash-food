import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationProductWithCategory1643116060955 implements MigrationInterface {
    name = 'RelationProductWithCategory1643116060955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "products_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_f36d697e265ed99b80cae6984c9"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_d5740b38aa467721802eb30f24f"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_2b7a7a6d458c6ef149370c5f210"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoryId"`);
        await queryRunner.query(`DROP TABLE "stores"`);
        await queryRunner.query(`DROP TABLE "store_category"`);
    }

}
