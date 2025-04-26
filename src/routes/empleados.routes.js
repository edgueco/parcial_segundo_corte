import {Router} from "express";
import { methodHTTP as empleadoController } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", empleadoController.getEmpleados);

export default router;