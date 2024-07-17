import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from 'express';
import pacientesRoutes from './src/routes/pacientesRoutes';
import procedimentosRoutes from './src/routes/procedimentosRoutes';
class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
  
    middlewares() {
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
    }
  
    routes() {
        this.app.use('/pacientes', pacientesRoutes);
        this.app.use('/procedimentos', procedimentosRoutes);
    }
  }
  
  export default new App().app;
  