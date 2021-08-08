import { useContext } from "react";
import styled from "styled-components";
import PlanetContext from "../../../store/PlanetContext";

const CardContainer = styled.div`
  height: 50px;
  width: 50px;
  background-image: url("${(props) => props.planet}");
  margin: 10px;
  border-radius: 5px;
  border: ${props => props.radius};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Label = styled.h4`
  font-family: "Space Mono", monospace;
  text-transform: uppercase;
  color: white;
  margin: 1px;
  display: flex;
  color: #88fffe;
  justify-content: center;
`;

function Card(props) {
  const planetCtx = useContext(PlanetContext);
  function handlePlanetClick(planet) {
    planetCtx.setSelectedPlanet(planet);
  }
  return (
    <>
      <CardContainer
        planet={props.planet.thumbnail}
        radius={planetCtx.currentPlanet.name === props.planet.name ? "5px solid yellow" : "3px solid #88fffe"}
        onClick={handlePlanetClick.bind(this, props.planet)}
      />
      <Label>{props.planet.name}</Label>
    </>
  );
}

export default Card;
