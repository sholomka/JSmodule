var ww = new Worker('my_web_worker.js');

ww.onmessage = function (event) {
    document.body.innerHTML += "<p>message from the background thread:" + event.data + "</p>";
}



