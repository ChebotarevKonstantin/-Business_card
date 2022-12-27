import React from 'react';
import {BodyProps, usePlane} from "@react-three/cannon";

const Plane = (props?: BodyProps)=> {

    const [ref] = usePlane(()=>({rotation:[-Math.PI / 2, 0, 0], type: 'Kinematic', ...props}))

    return (
        <mesh ref={ref}>
            <planeBufferGeometry args={[5,5]}/>
        </mesh>
    );
}

export default Plane;