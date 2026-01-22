import { Request, Response } from "express";
import {
  createContato,
  getAllContatos,
  updateContato,
  deleteContato,
  getContatoById,
} from "../services/contato.service";
import { validateNome } from "../validations/contato.validation";

export async function create(req: Request, res: Response) {
  const { nome, telefone } = req.body;

  if (!nome || !telefone) {
    return res.status(400).json({
      error: "Nome e telefone são obrigatórios",
    });
  }

  if (!validateNome(nome)) {
    return res.status(400).json({ error: "Nome inválido" });
  }

  const contato = await createContato(nome, telefone);
  res.status(201).json(contato);
}

export async function findAll(req: Request, res: Response) {
  const contatos = await getAllContatos();
  res.status(200).json(contatos);
}

export async function findById(req: Request, res: Response) {
  const { id } = req.params;

  const contato = await getContatoById(Number(id));
  if (contato === null || contato === undefined){
  return res.status(404).json({ error: "ID não encontrado" });
}

  res.status(200).json(contato);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const { nome, telefone } = req.body;

  if (!validateNome(nome)) {
    return res.status(400).json({ error: "Nome inválido" });
  }

  const contato = await updateContato(Number(id), nome, telefone);

  res.status(200).json(contato);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;

  await deleteContato(Number(id));
  res.status(204).send();
}
