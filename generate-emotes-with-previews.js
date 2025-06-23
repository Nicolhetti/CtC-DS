const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const emotesDir = path.join(__dirname, 'public', 'emotes');
const previewsDir = path.join(__dirname, 'public', 'emotes-previews');
const outputFile = path.join(__dirname, 'emotes.ts');

const validExtensions = ['.gif', '.png', '.webp', '.jpg'];

if (!fs.existsSync(previewsDir)) {
    fs.mkdirSync(previewsDir);
}

async function generatePreview(filename) {
    const ext = path.extname(filename).toLowerCase();
    if (ext !== '.gif') return; // Solo GIFs

    const inputPath = path.join(emotesDir, filename);
    const previewName = filename.replace(/\.gif$/, '.png');
    const outputPath = path.join(previewsDir, previewName);

    try {
        await sharp(inputPath)
            .png()
            .toFile(outputPath);

        console.log(`Preview generado: ${previewName}`);
    } catch (err) {
        console.error(`Error generando preview para ${filename}:`, err);
    }
}


async function main() {
    const files = fs
        .readdirSync(emotesDir)
        .filter((file) => validExtensions.includes(path.extname(file).toLowerCase()));

    for (const file of files) {
        await generatePreview(file);
    }

    const emotes = files.map((filename) => {
        const name = path.parse(filename).name;
        const ext = path.extname(filename).toLowerCase();

        if (ext === '.gif') {
            const preview = filename.replace(/\.gif$/, '.png');
            return `  { name: "${name}", filename: "${filename}", preview: "${preview}" }`;
        } else {
            return `  { name: "${name}", filename: "${filename}" }`;
        }
    });

    const content = `// Este archivo fue generado automáticamente
export const emotes = [
${emotes.join(',\n')}
];
`;

    fs.writeFileSync(outputFile, content, 'utf8');

    console.log(`✅ Generado correctamente: ${outputFile}`);
}

main();
