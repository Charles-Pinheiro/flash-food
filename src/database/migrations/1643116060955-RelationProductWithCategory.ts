import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationProductWithCategory1643116060955 implements MigrationInterface {
    name = 'RelationProductWithCategory1643116060955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE "store_category" ("store_category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_97c4207e55b7e8d4cc8665052f2" PRIMARY KEY ("store_category_id"))`);
        // await queryRunner.query(`CREATE TABLE "stores" ("store_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "categoryId" character varying NOT NULL, "addressId" uuid NOT NULL, "userId" uuid NOT NULL, "storeCategoriesStoreCategoryId" uuid, CONSTRAINT "REL_d5740b38aa467721802eb30f24" UNIQUE ("addressId"), CONSTRAINT "PK_123fd77ff9cffa555180ca737ff" PRIMARY KEY ("store_id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" float NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "products_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        //await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_2b7a7a6d458c6ef149370c5f210" FOREIGN KEY ("storeCategoriesStoreCategoryId") REFERENCES "store_category"("store_category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        //await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_d5740b38aa467721802eb30f24f" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        //await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_f36d697e265ed99b80cae6984c9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
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
