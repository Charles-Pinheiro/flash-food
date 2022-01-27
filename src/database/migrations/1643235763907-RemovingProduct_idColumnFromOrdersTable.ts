import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovingProductIdColumnFromOrdersTable1643235763907
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "productId"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" ADD "productId" uuid`);
  }
}
