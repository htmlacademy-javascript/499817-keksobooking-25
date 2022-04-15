import {FEATURES, TYPE_OF_ROOM, PHOTOS} from './consts.js';
import {
  removeRepeatingValues,
  generateRandomIntegerNumberFromRange,
  generateRandomFloatNumberFromRange,
  getRandomValueOfArray,
  generateRandomLengthArray
} from './utils.js';

const generateImageNumber = () => {
  let imageNumber = generateRandomIntegerNumberFromRange(1, 10).toString();
  if (imageNumber.length <= 1) {
    imageNumber = `0${imageNumber}`;
  }
  return imageNumber;
};

const generateAuthor = function() {
  return {
    avatar: `img/avatars/user${generateImageNumber()}.png`, // от 1 до 10, перед однозначными числами ставится 0, т.е. 01 02 и т.д.
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
};

const generateMockData = (data = []) => {
  for (let i = 0; i < 10; i++) {
    data.push(generateSingleMockItem());
  }
  return data;
};

export {generateMockData};
