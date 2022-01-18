window.onload = function(){
    "use strict";
    var startBtn = document.getElementById("startBtn");
    var stopBtn = document.getElementById("stopBtn");
    var animationTextId = document.getElementById("animationTextId");
    var txtAreaId = document.getElementById("txtAreaId");
    var dropdownId = document.getElementById("dropdownId");
    var turbo = document.getElementById("turbo");

    startBtn.onclick = startFunc;
    stopBtn.onclick = stopFunc;
    dropdownId.onchange = changeDropdownFunc;
    animationTextId.onchange = changeAnimationTextFunc;
    turbo.onclick = turboFunc;
    var i;
    var contentArray;
    var intervalId;
    var speed;

//increases/decreases speed of animation
function turboFunc(){
    turboCheck();
    if (speed !== null && startBtn.disabled) {
        clearInterval(intervalId);
        intervalId = null;
        intervalId = setInterval(callContent, speed);
    }
}

//starts animation
function startFunc(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    animationTextId.disabled = true;
    txtAreaId.readOnly=true;
    var contentVal  = ANIMATIONS[animationTextId.value];
    contentArray = contentVal.split("=====\n");
    i=0;
    turboCheck();
    intervalId= setInterval(callContent, speed);
}

//sets speed of animations based on turbo checkbox
function turboCheck(){
    if(turbo.checked===true){
        speed = 50;
    }
    else{
        speed =250;
    }
}

//show animation content in textbox
function callContent(){
    if(i>=contentArray.length){
        i=0;
    }
    txtAreaId.innerHTML = contentArray[i];
    i++;
}

//stops animation
function stopFunc(){
    stopBtn.disabled = true;
    startBtn.disabled = false;
    animationTextId.disabled = false;
    clearInterval(intervalId);
    intervalId = null;
    speed=null;
    txtAreaId.innerHTML = ANIMATIONS[animationTextId.value];
    txtAreaId.readOnly = false;

}

//change fontsize
function changeDropdownFunc(){
    txtAreaId.style.fontSize = dropdownId.value;
}

//select animation type
function changeAnimationTextFunc(){
    txtAreaId.innerHTML = ANIMATIONS[animationTextId.value];
}
};