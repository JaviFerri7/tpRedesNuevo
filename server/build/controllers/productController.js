"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lP = yield database_1.default.query('SELECT * FROM Producto');
            res.json(lP);
        });
    }
    getOne(req, res) {
        res.json({ text: 'Se cargo un solo producto ' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Producto set ?', [req.body]);
            res.json({ text: 'Producto creado' });
        });
    }
    update(req, res) {
        res.json({ text: 'Producto actualizado ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Producto eliminado ' + req.params.id });
    }
}
const productController = new ProductController;
exports.default = productController;
