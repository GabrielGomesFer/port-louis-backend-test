import { appDb } from "../config/database";

export interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

export async function createContato(
  nome: string,
  telefone: string
): Promise<Contato> {
  if (nome == null || telefone == null) {
    throw new Error("Nome e telefone são obrigatórios");
  }
  const [result]: any = await appDb.execute(
    "INSERT INTO contatos (nome, telefone) VALUES (?, ?)",
    [nome, telefone]
  );

  return {
    id: result.insertId,
    nome,
    telefone,
  };
}

export async function getAllContatos(): Promise<Contato[]> {
  const [rows]: any = await appDb.execute("SELECT * FROM contatos");
  return rows;
}

export async function getContatoById(
  id: number
): Promise<Contato | undefined> {
  const [rows]: any = await appDb.execute(
    "SELECT id, nome, telefone FROM contatos WHERE id = ?",
    [id]
  );

  return rows[0];
}

export async function updateContato(
  id: number,
  nome?: string,
  telefone?: string
): Promise<Contato | undefined> {
  const fields: string[] = [];
  const values: any[] = [];

  if (nome !== undefined) {
    fields.push("nome = ?");
    values.push(nome);
  }

  if (telefone !== undefined) {
    fields.push("telefone = ?");
    values.push(telefone);
  }

  if (fields.length === 0) {
    return undefined;
  }

  values.push(id);

  await appDb.execute(
    `UPDATE contatos SET ${fields.join(", ")} WHERE id = ?`,
    values
  );

  const [rows]: any = await appDb.execute(
    "SELECT * FROM contatos WHERE id = ?",
    [id]
  );

  return rows[0];
}


export async function deleteContato(id: number): Promise<void> {
  await appDb.execute("DELETE FROM contatos WHERE id = ?", [id]);
}



