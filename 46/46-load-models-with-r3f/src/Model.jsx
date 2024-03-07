import { useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default function model () {
    const model = useLoader(
        GLTFLoader,
        './FlightHelmet/glTF/FlightHelmet.gltf',

        //'./hamburger-draco.glb',
        (loader) => {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('./draco/')
            loader.setDRACOLoader(dracoLoader)
        }
    )
    return <primitive object={model.scene} scale={5} position-y={-1}/>
}