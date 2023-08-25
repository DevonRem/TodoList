import './style.css';
import { inboxLoad, todayLoad, inboxCreate, todayCreate, createForm, displayForm, newprojectCreate } from './DOM.js';


const inboxBtn = document.querySelector('.inbox');
const todayBtn = document.querySelector('.today');
const newprojectBtn = document.querySelector('.newProject');

const Content = document.querySelector('.main-content');

const inboxDiv = document.querySelector('.inboxDiv');

inboxCreate();
todayCreate();
createForm();


const newBtn = document.querySelectorAll('.newBtn');


inboxBtn.addEventListener('click', function(e) {
        inboxLoad();

});

inboxBtn.addEventListener('mouseover', function(e) {

        this.style.backgroundColor = '#219ebc';
});

inboxBtn.addEventListener('mouseout', function(e) {

        this.style.backgroundColor = '#8ecae6';
});

todayBtn.addEventListener('click', function(e) {
        todayLoad();
});

todayBtn.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = '#219ebc';
});

todayBtn.addEventListener('mouseout', function(e) {
        this.style.backgroundColor = '#8ecae6';
});


for(let i=0;i<newBtn.length;i++)
newBtn[i].addEventListener('click', function(e) {
        displayForm();
        
});

newprojectBtn.addEventListener('click', function(e) {
        newprojectCreate();
        
});

newprojectBtn.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = '#219ebc';
});

newprojectBtn.addEventListener('mouseout', function(e) {
        this.style.backgroundColor = '#8ecae6';
});