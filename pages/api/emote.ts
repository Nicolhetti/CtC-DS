import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename, size } = req.query;

  if (!filename || typeof filename !== 'string') {
    return res.status(400).send('Falta el parámetro "filename".');
  }

  const imagePath = path.join(process.cwd(), 'public', 'emotes', filename);

  if (!fs.existsSync(imagePath)) {
    return res.status(404).send('Emote no encontrado.');
  }

  const ext = path.extname(filename).toLowerCase();
  const sizeNum = parseInt(size as string) || 48;

  try {
    const imageBuffer = fs.readFileSync(imagePath);

    const isGif = ext === '.gif';

    if (isGif) {
      res.setHeader('Content-Type', 'image/gif');
      res.send(imageBuffer);
    } else {
      const resized = await sharp(imageBuffer)
        .resize({ width: sizeNum, height: sizeNum })
        .toBuffer();

      const contentType = ext === '.png'
        ? 'image/png'
        : ext === '.webp'
          ? 'image/webp'
          : 'image/jpeg';

      res.setHeader('Content-Type', contentType);
      res.send(resized);
    }
  } catch (err) {
    console.error('Error al procesar imagen:', err);
    res.status(500).send('Error al procesar la imagen.');
  }
}
