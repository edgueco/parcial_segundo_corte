import {Router} from "express";
import { methodHTTP as clienteController } from "../controllers/cliente.controllers.js";

const router = Router();

router.post("/", clienteController.postClientes);

export default router;