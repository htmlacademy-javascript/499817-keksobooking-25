const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const slider = form.querySelector('.ad-form__slider');

const findFieldsets = (block) => {
  const fieldsets = block.querySelectorAll('fieldset');
  return fieldsets;
};

const disableItems = (items) => {
  items.forEach((item) => {
    item.disabled = true;
  });
};

const enableItems = (items) => {
  items.forEach((item) => {
    item.disabled = false;
  });
};

const formFieldsets = findFieldsets(form);
const mapFieldsets = findFieldsets(mapFilters);
const mapSelects = mapFilters.querySelectorAll('select');

const initiateForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  slider.classList.add('ad-form__slider--disabled');
  disableItems(formFieldsets);
  disableItems(mapFieldsets);
  disableItems(mapSelects);
};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  slider.classList.remove('ad-form__slider--disabled');
  enableItems(formFieldsets);
  enableItems(mapFieldsets);
  enableItems(mapSelects);
};

export {initiateForm, activateForm};
