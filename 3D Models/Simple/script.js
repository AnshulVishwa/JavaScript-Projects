//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
)

let mouseX = window.innerWidth/2
let mouseY = window.innerHeight/2
let object;

const loader = new GLTFLoader()

loader.load(
  "./models/lambo/scene.gltf", (gltf) => {
    object = gltf.scene;
    object.scale.set(10, 10, 10); // Scale up the model for visibility
    scene.add(object);
  }
)

const renderer = new THREE.WebGLRenderer({alpha:true})
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 1; // Move camera closer

const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 0.5); // Lower intensity
scene.add(ambientLight);
const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
  requestAnimationFrame(animate)
  object.rotation.y = -3 + mouseX / window.innerWidth * 3;
  object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  renderer.render(scene, camera);
}
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}
animate();
