import { Request, Response } from 'express';
import pool from '../database';

class ProductController {

    public async list(req: Request, res: Response): Promise<void> {
        const prod = await pool.query('SELECT * FROM Producto');
        res.json(prod);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const prod = await pool.query('SELECT * FROM Producto WHERE id = ?', [id]);
        console.log(prod);
     if (prod.length > 0) {
             return res.json(prod[0]);
     }
        res.status(404).json({ text: "The Producto doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Producto set ?', [req.body]);
        res.json({ message: 'Product Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Producto set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The Product was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Producto WHERE id = ?', [id]);
        res.json({ message: "The Product was deleted" });
    }
}

const productController = new ProductController;
export default productController;