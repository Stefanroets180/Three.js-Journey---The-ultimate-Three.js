import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './Model.jsx'
import { Suspense } from 'react'
import Placeholder from "./Placeholder.jsx";
import Hamburger from "./Hamburger.jsx";
import Fox from "./Fox.jsx";
import Bender from "./Bender.jsx"

export default function Experience()
{


    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense
            fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
            <Hamburger scale={0.35}/>
        </Suspense>
        <Fox/>
        <Bender scale={0.25} position={[3, 1, 1]} rotation-y={ - Math.PI * 0.5 }/>




    </>
}