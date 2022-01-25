import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationProductWithStore1643118182749 implements MigrationInterface {
    name = 'RelationProductWithStore1643118182749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "storeStoreId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_86b04a19688e38b3c9bca3275eb" FOREIGN KEY ("storeStoreId") REFERENCES "stores"("store_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_86b04a19688e38b3c9bca3275eb"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "storeStoreId"`);
    }

}
