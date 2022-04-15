import './utils.js';
import {generateMockData} from './data.js';
import {generateMarkup} from './generator.js';
import {initiateForm, activateForm} from './form.js';

generateMarkup(generateMockData());
initiateForm();

setTimeout(activateForm, 3000);
