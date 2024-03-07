import { useGLTF } from '@react-three/drei'


export default function model () {
    const model = useGLTF('./hamburger-draco.glb')
    return <primitive object={model.scene} scale={0.35} />
}
useGLTF.preload('./hamburger-draco.glb')