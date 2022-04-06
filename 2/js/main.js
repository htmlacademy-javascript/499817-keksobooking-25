const getRandomIntegerNumberFromRange = (rangeStart, rangeEnd) => {
  let result = '';
  const diff = rangeEnd - rangeStart;
  if (rangeStart >= 0 && rangeEnd >= 0 && diff > 0) {
    result = Math.floor(rangeStart + Math.random() * diff);
  } else {
    result = 'Некорректный ввод диапазона';
  }
  return result;
};

const getRandomFloatNumberFromRange = (rangeStart, rangeEnd, numberOfSymbolsAfterComma) => {
  let result = '';
  const diff = rangeEnd - rangeStart;
  if (rangeStart >= 0 && rangeEnd >= 0 && diff > 0 && numberOfSymbolsAfterComma > 0) {
    result = rangeStart + Math.random() * diff;
    const integerPart = Math.floor(result);
    const floatPart = parseFloat((result - integerPart).toPrecision(numberOfSymbolsAfterComma));
    result = integerPart + floatPart;
  } else {
    result = 'Некорректный ввод данных';
  }
  return result;
};

getRandomIntegerNumberFromRange(10, 12);
getRandomFloatNumberFromRange(10.2, 12.2, 4);


window.getRandomIntegerNumberFromRange = getRandomIntegerNumberFromRange;
window.getRandomFloatNumberFromRange = getRandomFloatNumberFromRange;
