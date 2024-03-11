import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experiences()
{
    const cube = useRef()
    const sphere = useRef()


    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2

    })

    const eventHandler = () =>
    {
        console.log(event)
        cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    }
    const eventHandlerR = () =>
    {
        console.log(event)
        sphere.current.material.color.set(`hsl(${Math.random() *360}, 100%, 82%)`)

    }

    return <>

        <OrbitControls makeDefault/>

        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>

        <mesh position-x={-2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange"/>
        </mesh>
        <mesh ref={sphere} position-x={-2} scale={1.5} onClick={eventHandlerR}>
            <sphereGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh ref={cube} position-x={2} scale={1.5} onClick={eventHandler}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>

    </>
}