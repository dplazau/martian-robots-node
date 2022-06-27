import PlanetGrid from "./classes/grid";
import Robot from "./classes/robot";

let RobotX = new Robot(
    { coordinates: { x: 0, y: 1 }, orientation: "E" },
    "FFRFFLLL",
    "ACTIVE"
);

RobotX.setInstructions();
console.log(RobotX.position);

let Mars = new PlanetGrid(
    { width: 5, length: 3 },
    { width: 0, length: 0 },
    { width: 50, length: 50 },
    {
        xo: 0,
        xf: 0,
        yo: 0,
        yf: 0,
    },
    []
);

Mars.defineLimits();
Mars.addScent({ coordinates: { x: 5, y: 3 }, orientation: "N" });
Mars.addScent({ coordinates: { x: 4, y: 0 }, orientation: "S" });
Mars.addScent({ coordinates: { x: 5, y: 3 }, orientation: "E" });
Mars.addScent({ coordinates: { x: 0, y: 3 }, orientation: "W" });

let checking = Mars.checkCoordinates({ x: 3, y: 2 });

console.log(checking);
