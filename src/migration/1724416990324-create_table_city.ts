import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCity1724416990324 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "city",
            columns: [{
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                unsigned: true
            },{
                name: 'state_id',
                type: 'int',
                length: '10'
            },{
                name: 'name',
                type: 'varchar',
                length: '100'
            },{
                name: 'createdAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                isNullable: true
            },{
                name: 'updatedAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                isNullable: true
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table city
        `)
    }

}
