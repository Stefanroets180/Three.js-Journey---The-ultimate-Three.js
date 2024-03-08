import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()
const materiall = new THREE.MeshMatcapMaterial()

export default function Experience()
{
    const donuts = useRef([])
    const [matcapTexture] = useMatcapTexture('46804D_CBE9AC_90B57C_95D38F', 256)
    const [matcapTexture2] = useMatcapTexture('537387_75BBB9_152E5B_0E85E8\n', 256)


    useFrame((state, delta) =>
    {
        for(const donut of donuts.current)
        {
            donut.rotation.y += delta * 0.2
        }
    })

    useEffect(() =>
    {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    useEffect(() =>
    {
        matcapTexture2.encoding = THREE.sRGBEncoding
        matcapTexture2.needsUpdate = true

        materiall.matcap = matcapTexture2
        materiall.needsUpdate = true
    }, [])

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Center>
            <Text3D
                material={ materiall }
                font="./fonts/Phlegmy Kilmister_Regular.json"
                size={ 0.75 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.002 }
                bevelSize={ 0.002 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                STEFAN TEST 12345
            </Text3D>
        </Center>

        { [...Array(100)].map((value, index) =>
            <mesh
                ref={ (element) => donuts.current[index] = element }
                key={ index }
                geometry={ torusGeometry }
                material={ material }
                position={ [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ] }
                scale={ 0.2 + Math.random() * 0.2 }
                rotation={ [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ] }
            >
                <torusGeometry args={ [ 1, 0.6, 16, 32 ] } />
            </mesh>
        ) }

    </>
}