import {fileReader} from '../lib/filereader.js';

describe('filereader.js',() => {
    it('reads numbers in a string format from a txt file into an array', async () => {
        var numbers = ["688", "904", "607", "299"];
        var arr = await fileReader(1);
        expect(arr).toEqual(numbers);
    });
    it('tries to read numbers from an invalid filename', async () => {
        expect(await fileReader()).toThrowError('error');
    });
});
