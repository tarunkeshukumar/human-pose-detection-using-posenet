// PoseNet implementation using p5.js

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  // Hide the video element and only display the canvas
  video.hide();
  // Create a new instance of poseNet with a callback for model readiness
  poseNet = ml5.poseNet(video, modelReady);
  // Set up an event listener to populate the global "poses" variable
  // with an array every time new poses are detected
  poseNet.on("pose", function(results) {
    poses = results;
  });
}

function modelReady() {
  console.log("Model is Ready");
}

// Main draw loop
function draw() {
  image(video, 0, 0, width, height);

  // Call both functions to draw keypoints and skeletons
  drawKeypoints();
  drawSkeleton();
}

// Function to draw ellipses over detected keypoints
function drawKeypoints() {
  // Loop through all detected poses
  for (let i = 0; i < poses.length; i++) {
    // Loop through keypoints for each pose
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      const keypoint = pose.keypoints[j];
      // Draw ellipse only if keypoint's confidence is above 0.3
      if (keypoint.score > 0.3) {
        fill(128,255,15);
        strokeWeight(5);
        ellipse(keypoint.position.x, keypoint.position.y, 20, 20);
      }
    }
  }
}

let noiseOffset = 0;

function drawSkeleton() {
  noiseOffset += 0.1; // Adjust this value to control the flow speed
  
  for (let i = 0; i < poses.length; i++) {
    const skeleton = poses[i].skeleton;
    for (let j = 0; j < skeleton.length; j++) {
      const cord0 = skeleton[j][0].position;
      const cord1 = skeleton[j][1].position;

      // Generate perlin noise value for color variation
      const noiseValue = noise(noiseOffset + j * 0.1);

      // Map noise value to color range
      const gradientColor = color(lerp(0, 255, noiseValue), lerp(0, 255, noiseValue), lerp(255, 0, noiseValue));

      // Set the stroke color to the gradient color
      stroke(gradientColor);
      line(cord0.x, cord0.y, cord1.x, cord1.y);
    }
  }
}



// Resize canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    video.size(width, height);
  }