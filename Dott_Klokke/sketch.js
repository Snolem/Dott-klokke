function setup() {
  createCanvas(1000, 130);
}

function draw() {
  background(0 , 0, 0);
  let hr = hour(); // Tidsenheter
  let min = minute();
  let sec = second();


fill(25, 50, 255);
noStroke();
text(hr + ':' + min + ':' + sec, 10, 30); //Digitale klokka i hjørnet
  for(let i = 1; i <= hr; i++){ //Timer
    circle(16*i, 50, 15) 
  }
  fill(25, 100, 255);
  for(let i = 1; i <=min; i++){ //Minutter
    circle(16*i, 70, 15)
  }  
  fill(25, 150, 255);
  for(let i = 1; i <= sec; i++){ //Sekund
    circle(16*i, 90, 15)
  }
}
