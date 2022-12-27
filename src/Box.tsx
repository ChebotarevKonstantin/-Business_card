import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import {Triplet, useBox} from "@react-three/cannon";

interface BoxProps {
    position?: Triplet;
}

const Box =(props?: BoxProps) =>{
    // const ref = useRef();
    // useFrame((state, delta)=>(ref.current.rotation.x += 0.01))

    const [ref] = useBox(() => ({
        mass: 1,
        position: [0, 5, 0],
        rotation: [0.4, 0.2, 0.5],
        ...props
    }));

    return (
        <mesh receiveShadow={true} castShadow={true} ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    );
}

export default Box;