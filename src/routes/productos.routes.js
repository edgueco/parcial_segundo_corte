import {Router} from "express";
import { methodHTTP as productoController } from "../controllers/producto.controllers.js";

const router = Router();

router.put("/:id", productoController.updateProducto);

export default router;