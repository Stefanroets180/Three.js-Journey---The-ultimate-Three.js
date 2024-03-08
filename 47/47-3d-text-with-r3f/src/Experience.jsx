import {Text3D, OrbitControls, Center} from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Center>
            <Text3D font="./fonts/Phlegmy Kilmister_Regular.json"
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.002 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }>
                HELLO R3F
                <meshNormalMaterial/>
            </Text3D>
        </Center>

    </>
}