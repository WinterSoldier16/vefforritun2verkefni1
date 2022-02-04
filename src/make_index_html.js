import { writeFile } from 'fs/promises';

export async function make_index_html() {
    const filename = 'index.html';
    const data = `<!DOCTYPE html>
    <html lang="is">
        <head>
            <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
            <meta charset="utf-8" />
            <title>Verkefni 1: Gagnavinnsla</title>
        </head>
        <body>
            <header>
                <h1>Vefforitun 2 - Verkefni 1: Gagnavinnsla</h1>
            </header>
            <div class="wrapper">
                <h2>Gagnasett</h2>
                <div class="datasets">
                    ${Array(12).fill().map((item, i) => `
                    <a href="./dataset${i+1}.html" class="dataset dataset${i+1}">Gagnasett ${i+1}</a>`).join('')}
                    
                </div>
            </div>
            
        </body>
    </html>`
    try {
        const result = await writeFile(`./dist/${filename}`, data, {flag : 'w'});
    } catch (e) {
        console.error(`Failed to create ${filename}`, e)
    }

}