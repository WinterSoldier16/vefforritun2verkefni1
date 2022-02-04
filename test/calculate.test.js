import math from 'mathjs';
import {calculate} from '../lib/calculate.js';

describe('calculate.js', () => {
    it('function receives correct data and performs calculations', () => {
        var numbers = [1, 2, 3, 4, 5];
        var result = {
            // Útreikningar fengnir af: https://www.wolframalpha.com/input?i=%281%2C+2%2C+3%2C+4%2C+5%29
            "variance": 2.5,
            "max": 5,
            "min": 1,
            "range": 4,
            "mean": 3,
            "median": 3,
            "std": math.sqrt(5/2),
            "sum": 15
        }
        expect(calculate(numbers)).toEqual(result);
    });
});