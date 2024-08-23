import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAddress1724417016772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "address",
            columns: [{
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                unsigned: true
            },{
                name: 'user_id',
                type: 'int',
                length: '10'
            },{
                name: 'complement',
                type: 'varchar',
                length: '255',
                isNullable: true
            },{
                name: 'number',
                type: 'int',
                length: '10',
                isNullable: true
            },{
                name: 'cep',
                type: 'varchar',
                length: '255',
                isNullable: true
            },{
                name: 'city_id',
                type: 'int',
                length: '10'
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
            drop table address
        `)
    }

}
