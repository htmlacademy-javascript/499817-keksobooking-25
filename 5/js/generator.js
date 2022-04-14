import {typeListDict} from './consts.js';

const currentBlock = document.querySelector('#map-canvas');


const template = document.querySelector('#card').content.querySelector('.popup'); //.content

const generateMarkup = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const current = item.offer;

    const currentElement = template.cloneNode(true);

    const title = currentElement.querySelector('.popup__title');
    const address = currentElement.querySelector('.popup__text--address');
    const price = currentElement.querySelector('.popup__text--price');
    const type = currentElement.querySelector('.popup__type');
    const capacity = currentElement.querySelector('.popup__text--capacity'); //!
    const time = currentElement.querySelector('.popup__text--time'); //!
    const features = currentElement.querySelector('.popup__features');
    const description = currentElement.querySelector('.popup__description');
    const photos = currentElement.querySelector('.popup__photos');
    const photo = currentElement.querySelector('.popup__photo');
    const avatar = currentElement.querySelector('.popup__avatar');

    title.textContent = current.title;
    address.textContent = current.address;
    price.textContent = `${current.price} ₽/ночь`;
    type.textContent = typeListDict[current.type];
    capacity.textContent = `${current.rooms} комнаты для ${current.guests} гостей'`;
    time.textContent = `Заезд после ${current.checkin}, выезд до ${current.checkout}`;

    const defaultFeaturesList = features.children;
    for (const feature of current.features) {
      for (const featureItem of defaultFeaturesList) {
        if (!featureItem.classList.contains(`popup__feature--${feature}`)) {
          featureItem.remove();
        }
      }
    }

    for (const source of current.photos) {
      photos.firstChild.remove();
      const currentPhoto = photo.cloneNode(true);
      currentPhoto.src = source;
      photos.appendChild(currentPhoto);
    }

    description.textContent = (current.description ? current.description : 'Описание отсутствует'); // !!!
    avatar.src = item.author.avatar;

    fragment.appendChild(currentElement);
  });

  currentBlock.appendChild(fragment);
};

export {generateMarkup};
