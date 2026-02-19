import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

export type DepoimentoItem = {
  id: string;
  url: string;
};

/**
 * Busca imagens da pasta local public/depoimentos.
 */
export function getDepoimentosImages(): DepoimentoItem[] {
  const depoimentosPath = path.join(process.cwd(), 'public', 'depoimentos');
  if (!fs.existsSync(depoimentosPath)) return [];

  const files = fs.readdirSync(depoimentosPath);
  return files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    })
    .sort()
    .map((filename) => ({
      id: filename,
      url: `/depoimentos/${filename}`,
    }));
}
