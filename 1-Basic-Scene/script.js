// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1,)
const material = new THREE.MeshBasicMaterial ({ color: 0xff0000 })
const mesh = new THREE.Mesh (geometry, material)
scene.add(mesh)

// Size
const size = {
    width: 800,
    height: 600
}

// Camera (point of view)
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
camera.position.y = 1

scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height)

renderer.render(scene, camera)