noseX=0;
noseY=0;

function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200,170);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  clown_nose=loadImage('https://roughandtumblegentleman.com/wp-content/uploads/2019/04/A-Mustache-Looks-Like-a-Big-Hairy-Smile.png');


  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  //fill(255,0,0);
  //stroke(255,0,0);
  //circle(noseX, noseY, 20);
image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
