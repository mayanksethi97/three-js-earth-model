/* eslint-disable react-hooks/exhaustive-deps */
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import cloudsMap from "../../assets/textures/8k_earth_clouds.jpg";

const Planet = (props) => {
  const [currentPlanetMap, cloudMap] = useTexture([ props.currentPlanet.texture, cloudsMap])


  const planetRef = useRef();
  const cloudsRef = useRef();
  useFrame(({ clock }) => {
    if (props.currentPlanet?.features?.autoRotate) {
      if (props.currentPlanet?.features?.clouds.show) {
        cloudsRef.current.rotation.y = clock.getElapsedTime() / 6;
      }
      planetRef.current.rotation.y = clock.getElapsedTime() / 6;
    }
  });

  useEffect(() => {
    props.toggleLoader(false);
  }, [currentPlanetMap]);

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      {props.currentPlanet?.features?.stars?.show && (
        <Stars
          radius={300}
          depth={60}
          count={props.currentPlanet?.features?.stars?.count || 20000}
          factor={props.currentPlanet?.features?.stars?.factor || 7}
          saturation={props.currentPlanet?.features?.stars?.saturation || 0}
          fade={props.currentPlanet?.features?.stars?.blink || true}
        />
      )}
      {props.currentPlanet?.features?.clouds?.show && (
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[1.005, 32, 32]} />
          <meshPhongMaterial
            map={cloudMap}
            opacity={props.currentPlanet?.features?.clouds?.opacity || 0.3}
            depthWrite={true}
            transparent={
              props.currentPlanet?.features?.clouds?.transparent || true
            }
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshPhongMaterial specularMap={specularMap} /> */}
        <meshStandardMaterial
          map={currentPlanetMap}
          metalness={0.4}
          roughness={0.6}
        />
        <OrbitControls
          enableZoom={props.currentPlanet?.features?.zoom?.enabled || false}
          enablePan={props.currentPlanet?.features?.pan?.enabled || false}
          enableRotate={props.currentPlanet?.features?.rotate?.enabled || false}
          zoomSpeed={props.currentPlanet?.features?.zoom?.speed || 0.6}
          panSpeed={props.currentPlanet?.features?.pan?.speed || 0.5}
          rotationSpeed={props.currentPlanet?.features?.rotate?.speed || 0.4}
        />
      </mesh>
    </>
  );
};

export default Planet;
