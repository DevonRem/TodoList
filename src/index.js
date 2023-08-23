import './style.css';
import { inboxLoad, todayLoad, inboxCreate, todayCreate, createForm, displayForm } from './DOM.js';

const inboxBtn = document.querySelector('.inbox');
const todayBtn = document.querySelector('.today');

const Content = document.querySelector('.main-content');

const inboxDiv = document.querySelector('.inboxDiv');

inboxCreate();
todayCreate();
createForm();



const newBtn = document.querySelectorAll('.newBtn');

inboxBtn.addEventListener('click', function(e) {
        inboxLoad();

});

todayBtn.addEventListener('click', function(e) {
        todayLoad();
});

for(let i=0;i<newBtn.length;i++)
newBtn[i].addEventListener('click', function(e) {
        displayForm();

});