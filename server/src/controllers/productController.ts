import { Request, Response } from 'express';

import pool from '../database';

class ProductController {

    public index(req: Request, res: Response) {
        pool.query('DESCRIBE Producto');
        res.json('Producto');
    }

    public create (req: Request, res: Response){
        res.json('Creando Producto')
    }
}

const productController = new ProductController;
export default productController;