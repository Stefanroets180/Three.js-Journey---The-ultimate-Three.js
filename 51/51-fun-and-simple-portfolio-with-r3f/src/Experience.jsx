import { PresentationControls,Float,Environment,useGLTF,  } from '@react-three/drei'
import Macbook from './Macbook.jsx'

export default function Experience()
{
    return <>
        <Environment preset="city"/>

        <color args={ [ '#241a1a' ] } attach="background" />

        <PresentationControls
            global
            rotation={[0.13,0.1,0]}
            polar={[-0.4,0.2]}
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
        >
        <Float rotationIntensity={0.4}>
            <Macbook
            position-y={-1.2}
        />
        </Float>
        </PresentationControls>


    </>
}