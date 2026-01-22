import { Router } from "express";
import {
  create,
  findAll,
  update,
  remove,
  findById,
} from "../controllers/contato.controller";

const router = Router();

router.post("/contatos", create);
router.get("/contatos", findAll);
router.get("/contatos/:id", findById);
router.patch("/contatos/:id", update);
router.delete("/contatos/:id", remove);


export default router;
