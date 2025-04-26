import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);
router.get("/:id", categoriaController.getCategory);
router.put("/:id", categoriaController.updateCategorias);
router.delete("/:id", categoriaController.deleteCategory);

export default router;