import { parseNumbersFromArray } from "../lib/parser.js";
import { fileReader } from "../lib/filereader.js";
import { calculate } from "../lib/calculate.js";
import { writeFile } from 'fs/promises';

export async function make_dataset_html(dataset) {
    var arr = await fileReader(dataset);
    arr = parseNumbersFromArray(arr);
    if (arr.length > 0) {
        var results = calculate(arr);
    }
    const filename = `dataset${dataset}.html`;

    if (arr.length > 0) {
        var data = `<!DOCTYPE html>
    <html lang="is">
        <head>
            <link rel="stylesheet" type="text/css" href="./styles/styles.css"/>
            <meta charset="utf-8" />
            <title>Gagnasett ${dataset}</title>
        </head>
        <body>
            <header>
                <h1>Niðurstöður úr útreikningum á Gagnasetti ${dataset}</h1>
                <a href="./index.html">Smelltu hér til að fara til baka á forsíðu</a>
            </header>
            <div class="main">
                <div class="results">
                <h2>
                    Niðurstöður:
                </h2>
                    <div class="resultbox">
                        ${Object.entries(results).map(entry => "<div class=\"result\">" + entry[0] + ": " + entry[1] + "</div>").join('\n')}
                    </div>
                </div>
                <div class="data">
                    <h2>
                        Tölur í Gagnasetti ${dataset}
                    </h2>
                    <p> 
                        ${arr.join('\n')}
                    </p>
                </div>
            </div>
        </body>
    </html>`
    } else {
        var data = `<!DOCTYPE html>
    <html lang="is">
        <head>
            <link rel="stylesheet" type="text/css" href="./styles/styles.css"/>
            <meta charset="utf-8" />
            <title>Gagnasett ${dataset}</title>
        </head>
        <body>
            <header>
                <h1>Niðurstöður úr útreikningum á Gagnasetti ${dataset}</h1>
                <h2>Gagnasett ${dataset} innihélt engar nothæfar tölur</h2>
                <a href="./index.html">Smelltu hér til að fara til baka á forsíðu</a>
            </header>
        </body>
    </html>`
    }

    try {
        const outcome = await writeFile(`./dist/${filename}`, data, {flag : 'w'});
    } catch (e) {
        console.error(`Failed to create ${filename}`, e);
    }
    
}