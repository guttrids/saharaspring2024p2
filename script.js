
var displayCounter = document.querySelector('.dYes-counter');
var derbyDisplayYes = document.querySelector('.derbyYes');
var dcountY = 20;


updateDisplay();

derbyDisplayYes.addEventListener("click",()=>
{
    dcountY++;
    updateDisplay();

})

function updateDisplay(){
    displayCounter.innerHTML = dcountY;
};

var displayCounter1 = document.querySelector('.dNo-counter');
var derbyDisplayNo = document.querySelector('.derbyNo');
var dcountN = 12;


updateDisplay1();

derbyDisplayNo.addEventListener("click",()=>
{
    dcountN++;
    updateDisplay1();

})

function updateDisplay1(){
    displayCounter1.innerHTML = dcountN;
};

var displayCounter2 = document.querySelector('.dMaybe-counter');
var derbyDisplayMaybe = document.querySelector('.derbyMaybe');
var dcountM = 7;

updateDisplay2();

derbyDisplayMaybe.addEventListener("click",()=>{
    dcountM++;
    updateDisplay2();
})

function updateDisplay2(){
    displayCounter2.innerHTML = dcountM;
}

function get(element){
    return document.getElementById(element);
}
function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    var events = get('.event');
    modal.classList.add('visible');
    backdrop.classList.add('visible');
    events.classList.remove('visible');


}

function closeModal(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    title.value = '';
    text.value = '';
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();


}
document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('new-button');
    var cancelButton = document.getElementById('cancel-button');
    var saveButton = document.getElementById('save-button');

    addButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});