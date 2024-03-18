import { useFrame } from '@react-three/fiber'
import { meshBounds, useGLTF, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()

    const hamburger = useGLTF('./hamburger.glb')

    useFrame((state, delta) =>
    {
        cube.current.rotation.x += delta * 0.5

        hamburger.scene.rotation.z += delta * 0.5
        hamburger.scene.rotation.x +=delta*0.5

    })

    const eventHandler = (event) =>
    {
        // console.log(event)
        cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    }

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh
            position-x={ - 5 }
            onClick={ (event) => event.stopPropagation() }
            onPointerEnter={ (event) => event.stopPropagation() }
        >
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
            ref={ cube }
             raycast={ meshBounds }
            position-x={ 4 }
            scale={ 1.5 }
            onClick={ eventHandler }
            onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
            onPointerLeave={ () => { document.body.style.cursor = 'default' } }
        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <primitive
            object={ hamburger.scene }
            scale={ 0.25 }
            position-y={ 0.5 }
            onClick={ (event) =>
            {
                console.log(event.object)
                event.stopPropagation()
            } }
        />

    </>
}