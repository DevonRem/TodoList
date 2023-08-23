const Content = document.querySelector('.main-content');
let sidebarBtns = document.querySelectorAll('#sidebarbtns');
//need to get sidebarbtns again when i dynamically add new projects
let todoArray = [];


function ToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.info = function() {
        return `Title: ${this.title}, Description: ${this.description}, Due Date: ${this.dueDate}, Priority: ${this.priority}`;
    }
}

function addTodo(Todo) {
    todoArray.push(Todo.info());
}

function inboxCreate() {
    const inboxDiv = document.createElement('div');
    Content.appendChild(inboxDiv);
    inboxDiv.classList.add('inboxDiv');
    const title = document.createElement('H1');
    title.innerText = 'Inbox';
    inboxDiv.appendChild(title);
    title.style.paddingLeft = "50px";

    const newBtn = document.createElement('button');
    newBtn.innerText = '+ Add Task';
    newBtn.setAttribute("type", "button");
    newBtn.style.marginLeft = "50px";
    newBtn.classList.add('newBtn');
    inboxDiv.appendChild(newBtn);


}



function todayCreate() {
    const todayDiv = document.createElement('div');
    Content.appendChild(todayDiv);
    todayDiv.classList.add('todayDiv');
    const titleToday = document.createElement('H1');
    titleToday.innerText = 'Today';
    todayDiv.appendChild(titleToday);
    titleToday.style.paddingLeft = "50px";
    todayDiv.style.display = 'none';

    const newBtn = document.createElement('button');
    newBtn.innerText = '+ Add Task';
    newBtn.setAttribute("type", "button");
    newBtn.style.marginLeft = "50px";
    newBtn.classList.add('newBtn');
    todayDiv.appendChild(newBtn);

}

function inboxLoad() {
    const mainContentItems = document.querySelectorAll('.main-content > *');
    const cards = document.querySelectorAll('.card');

    for(let i=0; i<sidebarBtns.length; i++){
        sidebarBtns[i].style.backgroundColor = "#8ecae6";
    }

    for(let i=0; i<mainContentItems.length; i++){
        mainContentItems[i].style.display = "none";
    }

    for(let i=0; i<cards.length; i++) {
        cards[i].style.removeProperty( 'display');
    }


    const inboxBtn = document.querySelector('.inbox');
    inboxBtn.style.backgroundColor = "#219ebc";

    const inboxDiv = document.querySelector('.inboxDiv');
    inboxDiv.style.removeProperty( 'display');
}

function todayLoad() {
    const mainContentItems = document.querySelectorAll('.main-content > *');

    for(let i=0; i<sidebarBtns.length; i++){
        sidebarBtns[i].style.backgroundColor = "#8ecae6";
    }

    for(let i=0; i<mainContentItems.length; i++){
        mainContentItems[i].style.display = "none";
    }

    const todayBtn = document.querySelector('.today');
    todayBtn.style.backgroundColor = "#219ebc";

    const todayDiv = document.querySelector('.todayDiv');

    todayDiv.style.removeProperty( 'display');
}


function createForm() {
    const form = document.createElement('FORM');
    form.style.border = 'black';
    form.style.borderStyle = 'solid';
    Content.appendChild(form);
    form.classList.add('form');
    form.style.padding = '50px';
    const title = document.createElement('H1');
    title.textContent = "Title";
    form.appendChild(title);
    const input1 = document.createElement('input');
    input1.setAttribute("type", "text");
    input1.classList.add('input1');
    form.appendChild(input1);

    const description = document.createElement('H1');
    description.textContent = "Description";
    form.appendChild(description);
    const input2 = document.createElement('input');
    input2.setAttribute("type", "text");
    input2.classList.add('input1');
    form.appendChild(input2);

    const dueDate = document.createElement('H1');
    dueDate.textContent = "Due Date";
    form.appendChild(dueDate);
    const input3 = document.createElement('input');
    input3.setAttribute("type", "date");
    input3.classList.add('input1');
    form.appendChild(input3);

    const priority = document.createElement('H1');
    priority.textContent = "Priority";
    form.appendChild(priority);

    //const input4 = document.createElement('input');
    //input4.setAttribute("type", "text");

    let values = ["High", "Medium", "Low"];
    const input4 = document.createElement('select');
    input4.name = "priority";
    input4.id = "priority";

    for (let i=0; i<values.length;i++) {
        let option = document.createElement("option");
        option.value = values[i];
        option.text = values[i].charAt(0).toUpperCase() + values[i].slice(1);
        input4.appendChild(option);
    }

    input4.classList.add('input1');
    form.appendChild(input4);
    form.style.display = 'none';
    form.style.backgroundColor = 'lightgray';
    form.style.marginLeft = '150px';

    form.style.position = 'absolute';

    const cancelbtn = document.createElement('button');
    cancelbtn.setAttribute("type", "button")
    form.appendChild(cancelbtn);
    const btntext2 = document.createElement('p');
    btntext2.textContent = 'cancel';
    cancelbtn.appendChild(btntext2);
    cancelbtn.style.marginLeft = '50px';

    cancelbtn.addEventListener('click', function(e) {
        form.style.display = 'none';
    });

    const submitbtn = document.createElement('button');
    submitbtn.setAttribute("type", "button")
    form.appendChild(submitbtn);
    const btntext = document.createElement('p');
    btntext.textContent = 'submit';
    submitbtn.appendChild(btntext);
    submitbtn.style.marginLeft = '50px';
 

    submitbtn.addEventListener('click', function(e) {
        const todo1 = new ToDo(input1.value, input2.value,input3.value,input4.value);
        addTodo(todo1);
        displayToDo(todo1);
        form.style.display = 'none';
    });

}

function displayForm() {
    const form = document.querySelector('.form');
    form.style.removeProperty( 'display');

}

function displayToDo() {
    if(todoArray != '') {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = 'lightblue';
        card.style.height = "50px";
        card.style.textAlign = "center";
        card.style.padding = "50px 20px";
        card.style.margin = "10px";
        Content.appendChild(card);
        card.textContent = todoArray;
        todoArray.shift();
    }
}

//create newprojectcreate and newprojectload

export { inboxCreate, todayCreate, inboxLoad, todayLoad, createForm, displayForm, displayToDo }