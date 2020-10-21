"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/producto', productController_1.default.index);
        this.router.post('/producto/create', productController_1.default.create);
        // //     this.router.get('/', productController.list);
        // //     this.router.get('/:id', productController.getOne);
        // //     this.router.post('/', productController.create);
        // //     this.router.put('/:id', productController.update);
        // //     this.router.delete('/:id', productController.delete);
    }
}
exports.default = new ProductRoutes().router;
