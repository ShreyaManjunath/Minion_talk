var btnTranslate=document.querySelector("#btn-translate");

var txtInput= document.querySelector("#txt-input");

var outputdiv = document.querySelector("#output");

function clickEventHandler(){
    outputdiv.innerText = "chkjvhjhff"+txtInput.value;
}
btnTranslate.addEventListener("click",clickEventHandler);