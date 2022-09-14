import { create } from "domain";
import { ResultSetHeader, Pool } from "mysql2/promise";
import Product from '../interfaces/product.interface';

class ProductsModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

// Requisito 01 Cadastro Produto 

    public async create(product: Product): Promise<Product> {
        const { name, amount } = product;
        const result = await this.connection.execute<ResultSetHeader>('INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
        [name, amount],
        );
        const [dataInserted] = result;
        const { insetId } = dataInserted;
        return { id: insetId, ...product};
    }
    
}



