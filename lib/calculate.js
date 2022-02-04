import {
  variance, max, mean, median, min, std, sum,
} from 'mathjs';

export function calculate(numbers) {
  const results = {
    variance: variance(numbers),
    max: max(numbers),
    min: min(numbers),
    range: max(numbers) - min(numbers),
    mean: mean(numbers),
    median: median(numbers),
    std: std(numbers),
    sum: sum(numbers),
  };

  return results;
}
