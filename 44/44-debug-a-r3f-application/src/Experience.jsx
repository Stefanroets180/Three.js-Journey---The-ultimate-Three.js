import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

export default function Experience()
{
    const {position, color, visible} = useControls({
        position:
            {
                value: { x: -2, y: 0},
                step: 0.01,
                joystick: 'invertY'
            },
        color: '#ff0000',
        visible: true
    })

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh visible={visible} position={ [position.x, position.y, 0] }>
            <sphereGeometry />
            <meshStandardMaterial color={ color } />
        </mesh>

        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}