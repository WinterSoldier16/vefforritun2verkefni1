import { readFile } from 'fs/promises';
import { make_dataset_html } from '../src/make_dataset_html.js';

describe('make_dataset_html.js', () => {
  it('function creates the correct html file', async () => {
    const dataset = 1;
    await make_dataset_html(dataset);
    let string = await readFile(`./dist/dataset${dataset}.html`);
    string = String(string);
    let testString = `<!DOCTYPE html>
    <html lang="is">
        <head>
            <link rel="stylesheet" type="text/css" href="./public/styles.css"/>
            <meta charset="utf-8" />
            <title>Gagnasett 1</title>
        </head>
        <body>
            <header>
                <h1>Niðurstöður úr útreikningum á Gagnasetti 1</h1>
                <a href="./index.html">Smelltu hér til að fara til baka á forsíðu</a>
            </header>
            <div class="main">
                <div class="results">
                <h2>
                    Niðurstöður:
                </h2>
                    <div class="resultbox">
                        <div class="result">variance: 62803</div>
<div class="result">max: 904</div>
<div class="result">min: 299</div>
<div class="result">range: 605</div>
<div class="result">mean: 624.5</div>
<div class="result">median: 647.5</div>
<div class="result">std: 250.6052673029839</div>
<div class="result">sum: 2498</div>
                    </div>
                </div>
                <div class="data">
                    <h2>
                        Tölur í Gagnasetti 1
                    </h2>
                    <p> 
                        688
904
607
299
                    </p>
                </div>
            </div>
        </body>
    </html>`;
    testString = String(testString);
    expect(string).toEqual(testString);
  });
});
