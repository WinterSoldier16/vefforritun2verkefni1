import {variance} from 'mathjs';
import {max} from 'mathjs';
import {mean} from 'mathjs';
import {median} from 'mathjs';
import {min} from 'mathjs';
import {std} from 'mathjs';
import {sum} from 'mathjs';


export function calculate(numbers) {
    const results = {};
    results["variance"] = variance(numbers);
    results["max"] = max(numbers);
    results["min"] = min(numbers);
    results["range"] = results.max - results.min;
    results["mean"] = mean(numbers)
    results["median"] = median(numbers);
    results["std"] = std(numbers);
    results["sum"] = sum(numbers);

    return results;
}