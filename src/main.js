import {writeFile} from 'fs/promises';

async function main() {
    const filename = 'index.html';
    const data = `<!DOCTYPE html>
    <html lang="is">
        <head>
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
                    <div class="dataset ${i+1}">
                        <a href="data/${i+1}.txt">Gagnasett ${i+1}</a>
                    </div>`).join('')}
                    
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

main().catch((e) => {
    console.error('Error occured', e)
});