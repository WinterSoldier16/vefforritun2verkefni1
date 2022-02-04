import {variance} from 'mathjs';
import {max} from 'mathjs';
import {mean} from 'mathjs';
import {median} from 'mathjs';
import {min} from 'mathjs';
import {std} from 'mathjs';
import {sum} from 'mathjs';


export function calculate(numbers) {
    const results = {
        variance: variance(numbers),
        max: max(numbers),
        min: min(numbers),
        range: max(numbers) - min(numbers),
        mean: mean(numbers),
        median: median(numbers),
        std: std(numbers),
        sum: sum(numbers)
    };
    
    return results;
}