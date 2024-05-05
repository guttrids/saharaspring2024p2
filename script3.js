
var displayCounter = document.querySelector('.fairYes-counter');
var fairDisplayYes = document.querySelector('.fairYes');
var fcountY = 80;


updateDisplay();

fairDisplayYes.addEventListener("click",()=>
{
    fcountY++;
    updateDisplay();

});

function updateDisplay(){
    displayCounter.innerHTML = fcountY;
};
var displayCounter1 = document.querySelector('.fairMaybe-counter');
var fairDisplayMaybe = document.querySelector('.fairMaybe');
var fcountM = 4;


updateDisplay1();

fairDisplayYes.addEventListener("click",()=>
{
    fcountM++;
    updateDisplay1();

});

function updateDisplay1(){
    displayCounter1.innerHTML = fcountM;
};
var displayCounter2 = document.querySelector('.fairNo-counter');
var fairDisplayNo = document.querySelector('.fairNo');
var fcountN = 23;


updateDisplay2();

fairDisplayNo.addEventListener("click",()=>
{
    fcountN++;
    updateDisplay2();

});

function updateDisplay2(){
    displayCounter2.innerHTML = fcountN;
};