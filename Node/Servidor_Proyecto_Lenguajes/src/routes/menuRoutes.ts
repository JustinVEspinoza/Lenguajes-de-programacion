import {Router} from 'express';
import { menuControllers} from '../controllers/menuControllers';
class menuRoutes{
    public router:Router=Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',menuControllers.list);
        this.router.get('/:id',menuControllers.getParameters);
        this.router.post('/',menuControllers.create);
          this.router.post('/Image',menuControllers.image);
         this.router.get('/Filtro/:clave',menuControllers.getUnoByClave);
        this.router.delete('/:id',menuControllers.delete);
        this.router.put('/:id',menuControllers.update);

    }
}

const menu=new menuRoutes();
export default menu.router;