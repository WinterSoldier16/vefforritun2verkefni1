import { fileReader } from '../lib/filereader.js';

describe('filereader.js', () => {
  it('reads numbers in a string format from a txt file into an array', async () => {
    const numbers = ['688', '904', '607', '299'];
    const arr = await fileReader(1);
    expect(arr).toEqual(numbers);
  });
  it('tries to read numbers from an invalid filename', async () => {
    expect(await fileReader()).toThrowError('error');
  });
});
