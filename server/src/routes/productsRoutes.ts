import express, { Router } from 'express';

import ProductController from '../controllers/productController';

class ProductRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

     config(): void {
         this.router.get('/producto', ProductController.index);
         this.router.post('/producto', ProductController.create);
    // //     this.router.get('/', productController.list);
    // //     this.router.get('/:id', productController.getOne);
    // //     this.router.post('/', productController.create);
    // //     this.router.put('/:id', productController.update);
    // //     this.router.delete('/:id', productController.delete);
    }

}

export default new ProductRoutes().router;
