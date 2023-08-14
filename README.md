# Human Pose Detection Using PoseNet

# PoseNet
PoseNet is a computer vision model that enables real-time human pose estimation through web browsers using machine learning. Developed by Google, it detects key body joints and their spatial relationships within images or video streams, facilitating applications such as gesture recognition, augmented reality, fitness tracking, and more. Utilizing a convolutional neural network, PoseNet provides accurate and efficient pose estimation, making it accessible for interactive and creative projects on the web.

This project demonstrates the implementation of PoseNet, a pose estimation model, using p5.js and ml5.js. It captures the video from the user's camera and uses PoseNet to detect human poses. Keypoints of the detected poses are visualized as ellipses, and the skeleton connections are drawn with a flowy gradient effect.

#### Live at :  http://www.humanpose.com/


## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/posenet-anomaly-detection.git
cd posenet-anomaly-detection
```

2. Open the `index.html` file in a web browser to run the project.

## Dependencies

- [p5.js](https://p5js.org/): A JavaScript library for creative coding.
- [ml5.js](https://ml5js.org/): A friendly machine learning library for the web.
- PoseNet: A pose estimation model included with ml5.js.

## Usage

1. Upon running the project, your webcam will be accessed to capture video input.
2. PoseNet will detect human poses and visualize keypoints with ellipses.
3. Skeleton connections between keypoints will be drawn with a flowy gradient effect.

## Project Files

- `index.html`: HTML file containing the main structure of the web page.
- `posenet.js`: JavaScript file implementing PoseNet functionality using p5.js and ml5.js.

## Customization

One can customize the project by adjusting the parameters in the `posenet.js` file. For example, one can modify the color scheme, adjust the flow speed, and more.

## Acknowledgements

- [p5.js](https://p5js.org/)
- [ml5.js](https://ml5js.org/)
- [PoseNet](https://ml5js.org/reference/api-PoseNet/)

## License

This project is licensed under the [MIT License](LICENSE).
