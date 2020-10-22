import express, { Router } from 'express';

import ProductController from '../controllers/productController';

class ProductRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

     config(): void {
         this.router.get('/', ProductController.list); //TOMA LOS DATOS
         this.router.post('/', ProductController.create); //CREA UN PRODUCTO NUEVO
         this.router.get('/:id', ProductController.getOne); //TOMA UN SOLO PRODUCTO DE ACUERDO AL ID
         this.router.put('/:id', ProductController.update); //ACTUALIZA EL PRODUCTO CON SU ID
         this.router.delete('/:id', ProductController.delete); //ELIMINA UN PRODUCTO CON SU ID
    }

}

export default new ProductRoutes().router;
