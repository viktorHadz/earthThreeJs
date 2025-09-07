// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/Addons.js'
// import getStarfield from './getStartField.js'

// const w = window.innerWidth
// const h = window.innerHeight
// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
// camera.position.z = 10
// const renderer = new THREE.WebGLRenderer({ antialias: true })
// renderer.setSize(w, h)
// document.body.appendChild(renderer.domElement)

// new OrbitControls(camera, renderer.domElement)

// const earthGroup = new THREE.Group()
// earthGroup.rotation.z = (-23.4 * Math.PI) / 180
// scene.add(earthGroup)
// const loader = new THREE.TextureLoader()
// const geometry = new THREE.IcosahedronGeometry(1, 12)
// const material = new THREE.MeshStandardMaterial({
//   map: loader.load('/assets/earth/8081_earthmap10k.jpg'),
// })
// const earthMesh = new THREE.Mesh(geometry, material)
// earthGroup.add(earthMesh)

// const stars = getStarfield()
// scene.add(stars)
// // LIGHT
// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x441100)
// scene.add(hemiLight)

// function animate() {
//   requestAnimationFrame(animate)
//   earthMesh.rotation.y += 0.002
//   renderer.render(scene, camera)
// }

// animate()

// // function handleWindowResize() {
// //   camera.aspect = window.innerWidth / window.innerHeight
// //   camera.updateProjectionMatrix()
// //   renderer.setSize(window.innerWidth, window.innerHeight)
// // }
// // window.addEventListener('resize', handleWindowResize, false)
// //
