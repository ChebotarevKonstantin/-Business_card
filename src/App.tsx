
import {Canvas} from "@react-three/fiber";
import Box from './Box';
import {OrbitControls} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import Plane from "./Plane";
import {Suspense} from "react";
import {Model} from "./Publick/suzanne (1)/Model";

type AppProps = {name?: string}

export const App = ({ name = "text" }: AppProps) => (

    <Canvas camera={{ position: [-10, 10, 6.21], zoom: 0.5, fov: 40 }}>
        <Suspense fallback={null}>
        <OrbitControls />
            <Physics>
                    <color attach="background" args={["black"]} />
                    <hemisphereLight intensity={0.35} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.3}
                        penumbra={1}
                        intensity={2}
                        castShadow={true}
                    />
                    <Plane />
                    <Box />
                    <Box position={[0, 8, 0]} />
                    <Box position={[0, 18, 0]} />
                <Model/>
            </Physics>
        </Suspense>

    </Canvas>
);
