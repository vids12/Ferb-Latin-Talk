var btnTranlate = document.querySelector("#btn-translate");
var text = document.querySelector("#text-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getURL(inputText){
    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong with server. Try again after some time.");
}

function clickHandler() {
        var textInput = text.value;
        fetch(getURL(textInput))
            .then(response => response.json())
            .then(json => {var translatedText = json.contents.translated; output.innerText =translatedText})
        .catch(errorHandler);
}
btnTranlate.addEventListener("click",clickHandler)