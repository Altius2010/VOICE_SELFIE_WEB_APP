var SpeechRecognition = window.webkitSpeechRecognition;
var speech = new SpeechRecognition();

function start() {
    document.getElementById("speech").innerHTML = "";
    speech.start();
}
speech.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("speech").innerHTML = content;
}