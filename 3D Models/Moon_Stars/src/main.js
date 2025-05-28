import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#moon'),
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(20)

// Load textures
const textureLoader = new THREE.TextureLoader()
const moonTexture = textureLoader.load('src/Texture/moon.jpg')

// Create the moon
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(15, 64, 64),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    roughness: 1,
    metalness: 0
  })
)
moon.position.set(0, 0, -10)
scene.add(moon)

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
directionalLight.position.set(5, 5, 10)
scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

const controls = new OrbitControls(camera , renderer.domElement)

// Animation loop
function animate() {
  requestAnimationFrame(animate)
  moon.rotation.y += 0.01
  controls.update()
  renderer.render(scene, camera)
}
animate()
