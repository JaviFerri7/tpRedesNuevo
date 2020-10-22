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
        this.router.get('/', productController_1.default.list); //TOMA LOS DATOS
        this.router.post('/', productController_1.default.create); //CREA UN PRODUCTO NUEVO
        this.router.get('/:id', productController_1.default.getOne); //TOMA UN SOLO PRODUCTO DE ACUERDO AL ID
        this.router.put('/:id', productController_1.default.update); //ACTUALIZA EL PRODUCTO CON SU ID
        this.router.delete('/:id', productController_1.default.delete); //ELIMINA UN PRODUCTO CON SU ID
    }
}
exports.default = new ProductRoutes().router;
