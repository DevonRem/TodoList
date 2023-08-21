const Content = document.querySelector('.main-content');
let sidebarBtns = document.querySelectorAll('#sidebarbtns');
//need to get sidebarbtns again when i dynamically add new projects


function inboxCreate() {
    const inboxDiv = document.createElement('div');
    Content.appendChild(inboxDiv);
    inboxDiv.classList.add('inboxDiv');
    const title = document.createElement('H1');
    title.innerText = 'Inbox';
    inboxDiv.appendChild(title);
    title.style.paddingLeft = "50px";

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

}

function inboxLoad() {
    const mainContentItems = document.querySelectorAll('.main-content > *');

    for(let i=0; i<sidebarBtns.length; i++){
        sidebarBtns[i].style.backgroundColor = "#8ecae6";
    }

    for(let i=0; i<mainContentItems.length; i++){
        mainContentItems[i].style.display = "none";
    }

    const inboxBtn = document.querySelector('.inbox');
    inboxBtn.style.backgroundColor = "#219ebc";

    const inboxDiv = document.querySelector('.inboxDiv');
    inboxDiv.style.display = 'inline-block';
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

    todayDiv.style.display = 'inline-block';
}

//create newprojectcreate and newprojectload

export { inboxCreate, todayCreate, inboxLoad, todayLoad }