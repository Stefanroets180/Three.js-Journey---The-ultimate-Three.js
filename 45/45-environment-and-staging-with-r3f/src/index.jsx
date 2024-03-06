import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import React from "react";
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))
// //Setting color on the renderer
// const created = ({gl}) =>
// {
//     gl.setClearColor('#ff0000', 1)
// }

// //With the scene background
// const created = ({ scene }) =>
// {
//     scene.background = new THREE.Color('#ff0000')
// }

root.render(
    <Canvas
        shadows
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6]
        }}
        // onCreated={ created } //with the scene background//
    >

        <Experience/>
    </Canvas>
)