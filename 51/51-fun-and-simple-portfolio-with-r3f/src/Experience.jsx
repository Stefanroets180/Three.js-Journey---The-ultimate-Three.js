import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF,  } from '@react-three/drei'
import Macbook from './Macbook.jsx'

export default function Experience()
{
    return <>
        <Environment preset="city"/>

        <color args={ [ '#241a1a' ] } attach="background" />

        <PresentationControls
            global
            rotation={[0.2,0.05,0]}
            polar={[-0.4,0.2]}
            azimuth={ [ - 1, 0.75] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={0.2}>
                <rectAreaLight
                    width={2.5}
                    height={2.65}
                    intensity={95}
                    color={'#7611a6'}

                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />

                <Macbook
                    position-y={-1.4}
                />

                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={1.12}
                    position={[0, 0.1, -1.4]}
                    rotation-x={-0.256}

                >
                    <iframe src="https://stefan-portfolio-86.deno.dev/"/>
                </Html>

                <rectAreaLight
                    width={2.5}
                    height={2.65}
                    intensity={95}
                    color={'#7611a6'}

                    rotation={[-0.1, Math.PI, 0]}
                    position={[-20, 0, 1.15]}
                />

                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={1}
                    position={[2, 0.75, 0.75]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    color={'#296575'}
                >
                    STEFAN
                    Roets
                </Text>


            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />


    </>
}