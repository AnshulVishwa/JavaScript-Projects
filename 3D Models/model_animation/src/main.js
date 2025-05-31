import * as THREE from "three"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene()
scene.background = new THREE.Color("#CA7842")

const camera = new THREE.PerspectiveCamera( 75 , window.innerWidth/window.innerHeight , 0.1 , 1000 )
camera.position.z = 5

const geometry = new THREE.BoxGeometry( 0.8 , 0.8 , 0.8 )
const material = new THREE.MeshStandardMaterial( { color : "#4B352A" , emissive:"#4B352A", transparent: true, opacity: 1 } )
const box = new THREE.Mesh( geometry , material )
box.position.y=2

gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    })
    .to( box.position , { x : -2.5 , y : -2 , z : 0 , ease:"power1.out" } ,0 )
    .to(box.scale, { x: 0.5, y: 0.5, z: 0.5, ease: "bounce.in" }, 0)
    .to(box.rotation, { y: Math.PI, x: Math.PI, z: Math.PI, ease: "expo.inOut"}, 0)

scene.add(box)


const directionLight = new THREE.DirectionalLight("#cabfb9" , 10)
directionLight.position.set( 0.7 , 3.7 , 2.9 )
scene.add(directionLight)

const renderer = new THREE.WebGLRenderer({canvas : document.querySelector("canvas") , antialias:true})
renderer.setSize( window.innerWidth , window.innerHeight )

const width = window.innerWidth;
const height = window.innerHeight * 2;
renderer.setSize(width, height);

camera.aspect = width / height;
camera.updateProjectionMatrix();

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight * 2;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


let moveDirection = 0.01;

document.addEventListener("mousemove", (e) => {
  if (e.clientX < 800) {
    moveDirection = -0.01;
  } else {
    moveDirection = 0.01;
  }
});

function animate() {
  requestAnimationFrame(animate);
  box.rotation.y += moveDirection;
  box.rotation.x += moveDirection*0.01;
  box.rotation.z += moveDirection*0.01;
  renderer.render(scene, camera);
}
animate()
