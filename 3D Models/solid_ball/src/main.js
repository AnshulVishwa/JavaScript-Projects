import "./style.css"
import * as THREE from "three"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75 , window.innerWidth/window.innerHeight , 0.1 , 1000 )
camera.position.z = 10

const geometry = new THREE.SphereGeometry( 2 , 32 , 32 )

const material = new THREE.MeshStandardMaterial({ color: "#049ef4", emissive: "black", metalness: 0 , roughness:0 })
material.metalness = 1
const ball = new THREE.Mesh( geometry , material )
ball.position.set( 0 , 0 , 0 )
scene.add(ball)

const light = new THREE.DirectionalLight( "white" , 10 )
light.position.set( -1 , 1 , 1 )
scene.add(light)
const pointLight = new THREE.PointLight( "white" , 5 )
pointLight.position.set( 1 , 0 , 3 )
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight("white", 10);
ambientLight.position.set( 0 , 0 , 0 )
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer( {canvas : document.querySelector("canvas") , antialias:true} )
renderer.setSize(window.innerWidth, window.innerHeight)

function animate(){
  requestAnimationFrame(animate)
  ball.rotation.x += 0.1
  ball.rotation.y += 0.1
  renderer.render( scene , camera )
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate()
