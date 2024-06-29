import { insertarAutos } from "../controllers/autoController";
import { Router } from "express";

const router:Router = Router();

router.post('/',insertarAutos);
/*router.get('/',listarPerfiles);
router.get('/:id',obtenerPerfil);
router.put('/:id',modificarPerfil);
router.delete('/:id',eliminarPerfil);*/

export default router