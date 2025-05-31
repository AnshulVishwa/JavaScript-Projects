import './style.css'
import * as THREE from "three"
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene()
// Use PerspectiveCamera instead of Camera
const camera = new THREE.PerspectiveCamera( 65 , window.innerWidth/window.innerHeight , 0.1 , 100 )

const loader = new THREE.TextureLoader()

const geometry = new THREE.SphereGeometry( 7 , 100 , 100 ); 
const material = new THREE.MeshStandardMaterial({
  map: loader.load("/src/Texture/Onyx015_1K-JPG_Color.jpg"),
  roughnessMap: loader.load("/src/Texture/Onyx015_1K-JPG_Roughness.jpg"),
  normalMap: loader.load("/src/Texture/Onyx015_1K-JPG_Normal.jpg"),
  displacementMap: loader.load("/src/Texture/Onyx015_1K-JPG_Displacement.jpg"),
  aoMap: loader.load("/src/Texture/Onyx015_1K-JPG_AmbientOcclusion.jpg"),
  metalnessMap: loader.load("/src/Texture/Onyx015_1K-JPG_Metalness.jpg"),
});
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
sphere.position.set(0,0,0)
scene.add(sphere)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
// scene.add(directionalLight);
const pointLight = new THREE.PointLight(0xffffff, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const gui = new GUI();

// Light helpers
const ambientHelper = null; // AmbientLight has no visible helper in THREE.js

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 3);
// scene.add(directionalLightHelper);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.1);
scene.add(pointLightHelper);

// Ambient Light controls
const ambientFolder = gui.addFolder('Ambient Light');
ambientFolder.add(ambientLight, 'intensity', 0, 2, 0.01);
ambientFolder.addColor({ color: ambientLight.color.getHex() }, 'color')
  .onChange(value => ambientLight.color.set(value));
ambientFolder.open();

// Directional Light controls
const dirFolder = gui.addFolder('Directional Light');
dirFolder.add(directionalLight, 'intensity', 0, 2, 0.01);
dirFolder.add(directionalLight.position, 'x', -20, 20, 0.1);
dirFolder.add(directionalLight.position, 'y', -20, 20, 0.1);
dirFolder.add(directionalLight.position, 'z', -20, 20, 0.1);
dirFolder.addColor({ color: directionalLight.color.getHex() }, 'color')
  .onChange(value => directionalLight.color.set(value));
dirFolder.open();

// Point Light controls
const pointFolder = gui.addFolder('Point Light');
pointFolder.add(pointLight, 'intensity', 0, 10, 0.01);
pointFolder.add(pointLight.position, 'x', -20, 20, 0.1);
pointFolder.add(pointLight.position, 'y', -20, 20, 0.1);
pointFolder.add(pointLight.position, 'z', -20, 20, 0.1);
pointFolder.addColor({ color: pointLight.color.getHex() }, 'color')
  .onChange(value => pointLight.color.set(value));
pointFolder.open();

// Material controls
const matFolder = gui.addFolder('Material');
matFolder.add(material, 'roughness', 0, 1, 0.01);
matFolder.add(material, 'metalness', 0, 1, 0.01);
matFolder.open();

camera.position.z = 30
const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector("#car"), antialias:true
})
renderer.setSize( window.innerWidth , window.innerHeight )

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



function animate(){
  requestAnimationFrame(animate)
  // sphere.rotation.x += 0.01
  // sphere.rotation.z += 0.01
  controls.update(); // update controls for damping
  renderer.render( scene , camera )
}
animate()
