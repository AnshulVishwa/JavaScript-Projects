import "./style.css"
import * as THREE from "three"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75 , window.innerWidth/window.innerHeight , 0.1 , 1000 )

const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector("#bg")
})

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth , window.innerHeight )
camera.position.setZ(30)

renderer.render(scene , camera)

const geometry = new THREE.TorusGeometry( 10 , 3 , 16 , 100 )
const material = new THREE.MeshStandardMaterial( {color : 0xFF6500 , wireframe : true} )
const torus = new THREE.Mesh( geometry , material )
scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.intensity = 500
pointLight.position.set(0,20,0)
scene.add(pointLight)

// const ambientLight = new THREE.AmbientLight(0xffffff)
// ambientLight.intensity = 500
// ambientLight.position.set(0 ,0,0)
// scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)


function animate(){
  requestAnimationFrame(animate)
  // document.body.addEventListener( "mousemove" , (e) => {
  //   torus.rotation.x = e.clientX
  //   torus.rotation.y = e.clientY
  // } )
  //   torus.rotation.x += e.clientX
  //   torus.rotation.y += e.clientY
  torus.rotation.x += 0.01
  torus.rotation.y += 0.01
  torus.rotation.z += 0.001
  renderer.render(scene , camera)
}
animate()
