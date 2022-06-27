import Robot from "../../../../src/classes/robot";

test("Robot Class", () => {
    const RobotX = new Robot(
        { coordinates: { x: 1, y: 1 }, orientation: "E" },
        "FFFFFFF",
        "ACTIVE"
    );
});
