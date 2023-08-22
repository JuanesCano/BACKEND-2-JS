import {Router} from 'express';
import empleadoCtrl from '../controllers/empleadoController';
import { validFields } from '../middleware/validfields';
import { seedDt } from '../seed/seedDB';

const route = Router();

route.get("/seed", seedDt);

route.get('/', empleadoCtrl.listar);
route.get('/:id', empleadoCtrl.listById);

route.post('/', 
[
    check("nombres", "el campo nombre es obligatorio").notEmpty(),
    check("correo", "el campo correo es obligatorio").isEmail(),check("edad", "el campo edad es obligatorio").notEmpty(),
    check("salario", "el campo salario es obligatorio").notEmpty().isLength({min : 4, max : 50}),
    check("cargo", "el campo cargo es obligatorio").notEmpty().isLength({min : 4, max : 50}),

],
validFields,
empleadoCtrl.guardar);

route.put('/', empleadoCtrl.actualizar);

route.delete('/', empleadoCtrl.eliminar);

export default route;