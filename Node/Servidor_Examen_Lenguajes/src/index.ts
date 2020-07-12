import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
const bodyParser = require('body-parser');  





import routes from './routes/Routes';
class Server {
    public app:Application;
    constructor(){
        this.app=express();
        this.config();
        this.route();

    }
    config():void{
        this.app.use(bodyParser.json());  
        this.app.use(bodyParser.urlencoded({  
            extended: true
        }));
        this.app.set('port',process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }
    route():void{
        this.app.use(routes);
        this.app.use('/Examen',routes);
    }

    start():void{
        this.app.listen(this.app.get('port'),() =>{
            console.log("Server on port",this.app.get('port'));
        });
    }
}

const server=new Server();
server.start();