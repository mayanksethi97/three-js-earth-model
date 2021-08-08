import Card from "../Card";
import { PLANETS } from "../../../utils/planets";

function SideBar() {
  return (
    <>
      {Object.keys(PLANETS).map((item) => (
        <Card planet={PLANETS[item]} key={PLANETS[item].key} />
      ))}
    </>
  );
}

export default SideBar;
