import { useGLTF } from '@react-three/drei'
/*import { useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'*/

export default function model () {
    const model = useGLTF('./hamburger-draco.glb')
    return <primitive object={model.scene} scale={0.35} />
}