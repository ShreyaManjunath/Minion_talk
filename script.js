var btnTranslate=document.querySelector("#btn-translate");

var txtInput= document.querySelector("#txt-input");

var outputdiv = document.querySelector("#output");

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverurl + "?" + "text="+text

}
function errorhandler(){

    console.log("error occured",error)
}
function clickEventHandler(){
    // outputdiv.innerText = "chkjvhjhff"+txtInput.value;

    var inputtxt= txtInput.value;

    fetch(getTranslation(inputtxt))
    .then(response => response.json())
    .then(json => {
        var translated = json.contents.translated;
        outputdiv.innerText = translated;
        console.log(json.contents.translated)}
        )
    .catch(errorhandler)
}
btnTranslate.addEventListener("click",clickEventHandler);