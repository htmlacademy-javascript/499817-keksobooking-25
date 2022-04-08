const TYPE_OF_ROOM = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// const TEST_ARRAY = ['1', '1', '2', '3', '4', '5', '2', '3', '4', '5'];
// const TEST_ARRAY2 = [1, 2, 2, 3, 4, 5, 2, 3, 4, 5];

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

// const generateSolidLengthArray = (array = []) => {
//   return array.map((item) => {
//     item = getRandomValueOfArray(array);
//   });
// };

const generateRandomLengthArray = (array) => {
  const newArray = new Array();
  const newArrayLength = generateRandomIntegerNumberFromRange(1, 20);
  for (let i = 0; i < newArrayLength; i++) {
    newArray[i] = getRandomValueOfArray(array);
  }
  return newArray;
};
generateRandomIntegerNumberFromRange(10, 12);
generateRandomFloatNumberFromRange(10.2, 12.2, 4);

const generateImageNumber = () => {
  let imageNumber = generateRandomIntegerNumberFromRange(1, 10).toString();
  if (imageNumber.length <= 1) {
    imageNumber = `0${imageNumber}`;
  }
  return imageNumber;
};

const generateAuthor = function() {
  return {
    avatar: `img:/avatars/user${generateImageNumber()}.png`, // от 1 до 10, перед однозначными числами ставится 0, т.е. 01 02 и т.д.
  };
};

const generateOffer = function() {
  return {
    title: 'Моковый заголовок',
    address: 'location()',
    price: generateRandomIntegerNumberFromRange(1, 10000),
    type: getRandomValueOfArray(TYPE_OF_ROOM),
    rooms: generateRandomIntegerNumberFromRange(1, 10),
    guests: generateRandomIntegerNumberFromRange(1, 20),
    checkin: `1${generateRandomIntegerNumberFromRange(2, 4)}:00`,
    checkout: `1${generateRandomIntegerNumberFromRange(2, 4)}:00`,
    features: removeRepeatingValues(generateRandomLengthArray(FEATURES)),
    description: 'Моковое описание',
    photos: generateRandomLengthArray(PHOTOS),
  };
};

const generateLocation = function() {
  return {
    lat: generateRandomFloatNumberFromRange(35.65000, 35.70000, 5), // 35.65000 - 35.70000
    lng: generateRandomFloatNumberFromRange(139.70000, 139.80000, 5), // 139.70000 - 139.80000
  };
};

const generateSingleMockItem = () => {
  const item = {};
  item.author = generateAuthor();
  item.location = generateLocation();
  item.offer = generateOffer();
  item.offer.address = `${item.location.lat}, ${item.location.lng}`;

  return item;

  // return {
  //   author: generateAuthor(),
  //   offer: generateOffer(),
  //   location: generateLocation(),
  //   setLoc() {
  //     this.offer.address = `${this.location.lat}, ${this.location.lng}`;
  //   },
  // };
};

const generateMockData = (data = []) => {
  for (let i = 0; i < 10; i++) {
    data.push(generateSingleMockItem());
  }
  return data;
};

generateRandomNumber();

generateMockData();

window.generateRandomIntegerNumberFromRange = generateRandomIntegerNumberFromRange;
window.generateRandomFloatNumberFromRange = generateRandomFloatNumberFromRange;
