var video = document.getElementById('video');
var result = document.getElementById('result');
navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream) {
  video.srcObject = stream;
  });
cocoSsd.load().then(function(model) {
  setInterval(function() {
    model.detect(video).then(function(predictions) {
      var found = false;
      predictions.forEach(function(prediction) {
        var item = prediction.class;
        var score = Math.round(prediction.score * 100);
        
