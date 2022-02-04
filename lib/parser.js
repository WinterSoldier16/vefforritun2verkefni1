function isCorrupt(string) {
  if (string === '\n' || /\s+$/.test(string) || string === '') {
    return true;
  }
  return false;
}

function cleanUpNonNumbers(arr) {
  arr = arr.filter((element) => !isCorrupt(element));
  arr = arr.map((element) => element.replaceAll(/.(?=\d{3})/g, ''));
  arr = arr.map((element) => element.replaceAll(',', '.'));
  arr = arr.filter((element) => !isNaN(Number(element)));
  return arr;
}

export function parseNumbersFromArray(arr) {
  arr = cleanUpNonNumbers(arr);
  arr = arr.map((number) => Number(number));
  return arr;
}
