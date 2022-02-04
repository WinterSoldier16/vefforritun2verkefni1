import { parseNumbersFromArray } from '../lib/parser.js';

describe('parser.js', () => {
  it('successfully parse only valid numbers from an array', () => {
    const arr = ['999', 'thisIsNotANumber', '1.000.000,99', '1.000,00'];
    const numbers = [999, 1000000.99, 1000.00];
    expect(parseNumbersFromArray(arr)).toEqual(numbers);
  });
  it('Array is empty or contained no legal numbers', () => {
    const arr = ['NotANumber', 'NotThisEither', 'NopeSorryNothing', 'StillNo', ''];
    expect(parseNumbersFromArray(arr)).toEqual([]);
  });
  it('Array contains an incorrectly formatted number', () => {
    const arr = ['1.00.999,00'];
    expect(parseNumbersFromArray(arr)).toEqual([]);
  });
});
