var displayCounter3 = document.querySelector('.tYes-counter');
var townDisplayYes = document.querySelector('.townYes');
var tcountY = 37;

updateDisplay3();

townDisplayYes.addEventListener("click",()=>{
    tcountY++;
    updateDisplay3();
});

function updateDisplay3(){
    
    displayCounter3.innerHTML = tcountY;
};
var displayCounter4 = document.querySelector('.townMaybe-counter');
var townDisplayMaybe = document.querySelector('.townMaybe');
var tcountM = 52;

updateDisplay4();

townDisplayMaybe.addEventListener("click",()=>{
    tcountM++;
    updateDisplay4();
});
function updateDisplay4(){
    displayCounter4.innerHTML = tcountM;
}


var displayCounter5 = document.querySelector('.townNo-counter');
var townDisplayNo = document.querySelector('.townNo');
var tcountN = 13;

updateDisplay5();

townDisplayNo.addEventListener("click",()=>{
    tcountN++;
    updateDisplay5();
});

function updateDisplay5(){
    
    displayCounter5.innerHTML = tcountN;
};
