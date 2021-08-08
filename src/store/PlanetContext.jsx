import React, { useState } from "react";
import { PLANETS } from "../utils/planets";

const PlanetContext = React.createContext({
  setSelectedPlanet: () => {},
  currentPlanet: PLANETS.earth,
  loadingState: false,
  setLoadingState: () => {},
});

export const PlanetContextProvider = (props) => {
  const [planet, setPlanet] = useState(PLANETS.earth);
  const [loading, setLoading] = useState(false);
  const setSelectedPlanet = (planet) => {
    setPlanet(planet);
  };

  function setLoadingState(value) {
    setLoading(value);
  }
  const contextValue = {
    setSelectedPlanet: setSelectedPlanet,
    currentPlanet: planet,
    loadingState: loading,
    setLoadingState: setLoadingState,
  };

  return (
    <PlanetContext.Provider value={contextValue}>
      {props.children}
    </PlanetContext.Provider>
  );
};

export default PlanetContext;
