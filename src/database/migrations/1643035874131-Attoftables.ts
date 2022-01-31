import {MigrationInterface, QueryRunner} from "typeorm";

export class Attoftables1643035874131 implements MigrationInterface {
    name = 'Attoftables1643035874131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "AddressFK"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "StoreCategoriesFK"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "UserFK"`);
        await queryRunner.query(`ALTER TABLE "stores" ADD "storeCategoriesStoreCategoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "stores" ADD "categoryId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "UQ_d5740b38aa467721802eb30f24f" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_2b7a7a6d458c6ef149370c5f210" FOREIGN KEY ("storeCategoriesStoreCategoryId") REFERENCES "store_category"("store_category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_d5740b38aa467721802eb30f24f" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_f36d697e265ed99b80cae6984c9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_f36d697e265ed99b80cae6984c9"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_d5740b38aa467721802eb30f24f"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_2b7a7a6d458c6ef149370c5f210"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "UQ_d5740b38aa467721802eb30f24f"`);
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "stores" ADD "categoryId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stores" DROP COLUMN "storeCategoriesStoreCategoryId"`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "UserFK" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "StoreCategoriesFK" FOREIGN KEY ("categoryId") REFERENCES "store_category"("store_category_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "AddressFK" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
