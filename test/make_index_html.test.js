import { readFile } from 'fs/promises';
import { make_index_html } from '../src/make_index_html.js';

describe('make_index_html.js', () => {
  it('function creates the correct html file', async () => {
    const dataset = 1;
    await make_index_html(dataset);
    let string = await readFile('./dist/index.html');
    string = String(string);
    let testString = `<!DOCTYPE html>
    <html lang="is">
        <head>
            <link rel="stylesheet" type="text/css" href="./public/styles.css" />
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
                    
                    <a href="./dataset1.html" class="dataset dataset1">Gagnasett 1</a>
                    <a href="./dataset2.html" class="dataset dataset2">Gagnasett 2</a>
                    <a href="./dataset3.html" class="dataset dataset3">Gagnasett 3</a>
                    <a href="./dataset4.html" class="dataset dataset4">Gagnasett 4</a>
                    <a href="./dataset5.html" class="dataset dataset5">Gagnasett 5</a>
                    <a href="./dataset6.html" class="dataset dataset6">Gagnasett 6</a>
                    <a href="./dataset7.html" class="dataset dataset7">Gagnasett 7</a>
                    <a href="./dataset8.html" class="dataset dataset8">Gagnasett 8</a>
                    <a href="./dataset9.html" class="dataset dataset9">Gagnasett 9</a>
                    <a href="./dataset10.html" class="dataset dataset10">Gagnasett 10</a>
                    <a href="./dataset11.html" class="dataset dataset11">Gagnasett 11</a>
                    <a href="./dataset12.html" class="dataset dataset12">Gagnasett 12</a>
                    
                </div>
            </div>
            
        </body>
    </html>`;
    testString = String(testString);
    expect(string).toEqual(testString);
  });
});
