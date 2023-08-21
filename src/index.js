import './style.css';
import { inboxLoad, todayLoad, inboxCreate, todayCreate } from './DOM.js';

const inboxBtn = document.querySelector('.inbox');
const todayBtn = document.querySelector('.today');

const Content = document.querySelector('.main-content');

const inboxDiv = document.querySelector('.inboxDiv');

inboxCreate();
todayCreate();

inboxBtn.addEventListener('click', function(e) {
        inboxLoad();
});

todayBtn.addEventListener('click', function(e) {
            todayLoad();
});


