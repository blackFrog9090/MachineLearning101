function preload() {
}

function setup() {
  canvas = createCanvas(640,400);
  canvas.center()

}
function draw() {
  image(video, 0, 0, 640, 400);
}
function take_snapshot(){
save('Iseeyou:).png');
}

