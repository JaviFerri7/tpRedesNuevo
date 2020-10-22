import { Request, Response } from 'express';

import pool from '../database';

class ProductController {

    public async list(req: Request, res: Response): Promise<void> {
       const lP =  await pool.query('SELECT * FROM Producto');
        res.json(lP);
    }

    public getOne(req:Request, res:Response){
        res.json({text:'Se cargo un solo producto ' + req.params.id});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO Producto set ?', [req.body]);
        res.json({text: 'Producto creado'});
    }

    public update(req: Request, res:Response){
        res.json({text:'Producto actualizado ' + req.params.id });
    }

    public delete(req: Request, res:Response){
        res.json({text:'Producto eliminado ' + req.params.id});
    }
}   


const productController = new ProductController;
export default productController;