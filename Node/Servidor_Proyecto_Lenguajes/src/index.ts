import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';


import menuRoutes from './routes/menuRoutes';
class Server {
    public app:Application;
    constructor(){
        this.app=express();
        this.config();
        this.route();

    }
    config():void{
        this.app.set('port',process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }
    route():void{
        this.app.use(menuRoutes);
        this.app.use('/api/Menu',menuRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),() =>{
            console.log("Server on port",this.app.get('port'));
        });
    }
}

const server=new Server();
server.start();