import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Planet from "./components/planet";
import SideBar from "./components/tools/sidebar";
import { useContext } from "react";
import PlanetContext from "./store/PlanetContext";
import Loading from "./components/Loading";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const SideContainer = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  z-index: 99;
`;
function App() {
  const planetCtx = useContext(PlanetContext);
  function toggleLoader(value) {
    planetCtx.setLoadingState(value);
  }


  useEffect(() => {
    toggleLoader(true)
  }, [planetCtx.currentPlanet])
  return (
    <CanvasContainer>
      <SideContainer>
        <SideBar />
      </SideContainer>
      {planetCtx.loadingState && <Loading />}
      <Canvas>
        <Suspense fallback={null}>
          <Planet
            currentPlanet={planetCtx.currentPlanet}
            toggleLoader={toggleLoader}
          />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
