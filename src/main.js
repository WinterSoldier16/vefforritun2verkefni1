import {writeFile} from 'fs/promises';
import {make_dataset_html} from './make_dataset_html.js';
import {make_index_html} from './make_index_html.js';

async function main() {
    
    await make_index_html();

    for (var i = 1; i < 13; i++) {
        await make_dataset_html(i);
    }
}

main().catch((e) => {
    console.error('Error occured', e)
});

