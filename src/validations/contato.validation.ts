export function validateNome(nome: string): boolean {
  if (!nome) {
    return false;
  }

  const palavras = nome.trim().split(/\s+/);

  if (palavras.length < 2) {
    return false;
  }

  return palavras.every((palavra) => palavra.length >= 3);
}
