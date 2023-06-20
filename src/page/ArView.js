import { ARCanvas, ARMarker } from "@artcom/react-three-arjs/lib/ar";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "thick_onion_sausage_mushroom.gltf");
  console.log("gltf", gltf);
  return (
    <>
      <primitive object={gltf.scene} scale={100} />
    </>
  );
};
function ArView() {
  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      cameraParametersUrl='data/camera_para.dat'
      dpr={window.devicePixelRatio}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} />
      <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </ARMarker>
    </ARCanvas>
    // <div>
    // <Canvas>
    //   <Suspense fallback={null}>
    //     <Model />
    //     <OrbitControls />
    //     {/* <Environment preset="sunset" background /> */}
    //   </Suspense>
    // </Canvas>
    // </div>
  );
}

export default ArView;
