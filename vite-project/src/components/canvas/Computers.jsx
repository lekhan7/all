import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ismobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />

         <spotLight
        position={[-200, 150, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
         shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
           <pointLight intensity={60} /> 
      <primitive
        object={computer.scene}
        scale={ismobile ? 0.7:0.75}
        position={ismobile ?[0, -3, -2.2] : [0,-3.25,-1.5]}
       rotation={[2 * Math.PI, 0, 6.25]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

const[ismobile,setIsmobile] =useState();

useEffect(() =>{
 const mediaQuery = window.matchMedia('(maax-width:500px)');
  

 setIsmobile(mediaQuery.matches);
const handelmediaquerychange =(e) =>{
  setIsmobile(e.matches);

}
mediaQuery.addEventListener('change',
  handelmediaquerychange
)
return()=>{
  mediaQuery.removeEventListener('change',
    handelmediaquerychange
  );
}

},{ })


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers ismobile={ismobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;