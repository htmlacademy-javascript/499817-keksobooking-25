const removeRepeatingValues = function(array) {
  return array.filter((item, index) => array.indexOf(item) === index ); // как оно работает?
};

const generateRandomNumber = function(range = 10) {
  return Math.floor(Math.random() + Math.random() * range);
};

const generateRandomIntegerNumberFromRange = (rangeStart, rangeEnd) => {
  let result = '';
  const diff = rangeEnd - rangeStart;
  if (rangeStart >= 0 && rangeEnd >= 0 && diff > 0) {
    result = Math.floor(rangeStart + Math.random() * diff);
  } else {
    result = 'Некорректный ввод диапазона';
  }
  return result;
};

const generateRandomFloatNumberFromRange = (rangeStart, rangeEnd, numberOfSymbolsAfterComma) => {
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

const getRandomValueOfArray = function(array) {
  return array[generateRandomIntegerNumberFromRange(0, array.length - 1)];
};

const generateRandomLengthArray = (array) => {
  const newArray = new Array();
  const newArrayLength = generateRandomIntegerNumberFromRange(1, 20);
  for (let i = 0; i < newArrayLength; i++) {
    newArray[i] = getRandomValueOfArray(array);
  }
  return newArray;
};


export {
  removeRepeatingValues,
  generateRandomNumber,
  generateRandomIntegerNumberFromRange,
  generateRandomFloatNumberFromRange,
  getRandomValueOfArray,
  generateRandomLengthArray
};
