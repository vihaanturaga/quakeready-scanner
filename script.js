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
        if (item === 'refrigerator' && score > 50) {
          found = true;
          result.innerHTML = '🔴 UNSTABLE: Refrigerator detected! (' + score + '% sure)<br>Fix: Secure with anti-tip strap. Cost: $20-$40';
          } else if (item === 'tv' && score > 50) {
          found = true;
          result.innerHTML = '🔴 UNSTABLE: TV detected! (' + score + '% sure)<br>Fix: Mount to wall with VESA bracket. Cost: $20-$60';
          } else if (item === 'book' && score > 50) {
          found = true;
          result.innerHTML = '🔴 UNSTABLE: Bookcase detected! (' + score + '% sure)<br>Fix: Anchor to wall studs with L-brackets. Cost: $8-$20';
          } else if (item === 'oven' && score > 50) {
          found = true;
          result.innerHTML = '🔴 UNSTABLE: Stove detected! (' + score + '% sure)<br>Fix: Install anti-tip bracket. Cost: $10-$20';
          } else if (item === 'cabinet' && score > 50) {
          found = true;
          result.innerHTML = '🔴 UNSTABLE: Shelving detected! (' + score + '% sure)<br>Fix: Anchor top to wall studs. Cost: $10-$25';
          }
        });
      if (found === false) {
        result.innerHTML = '✅ No hazards detected. Move camera around your room to scan.';
        }
      });
    }, 1000);
  });
      
          
        
