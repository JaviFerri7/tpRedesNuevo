import express, { Application } from 'express';
import cors from 'cors';


import indexRoutes from './routes/indexRoutes';
import productRoutes from './routes/productsRoutes';

class Server{

    app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', 3000)
        this.app.use(cors());
        this.app.use(express.json());   
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void{
        this.app.use(indexRoutes);
        this.app.use(productRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'),() => {
            console.log('server on port 3000', this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();