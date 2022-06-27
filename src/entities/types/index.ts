export type GridType = {
    width: number;
    length: number;
    height?: number;
};

export type CoordinatesType = {
    x: number;
    y: number;
    z?: number;
};

export type OrientationType = "N" | "W" | "S" | "E";

export type InstructionsType = String;

export type CommandType = "L" | "R" | "F";

export type RobotStatusType = "INACTIVE" | "ACTIVE" | "PAUSED" | "LOST";

export type RobotInstructionStatusType =
    | "SUCCESFULL"
    | "PROCESSING"
    | "REJECTED"
    | "IGNORED";

export type PositionType = {
    coordinates: CoordinatesType;
    orientation: OrientationType;
};

export type RobotType = {
    position: PositionType;
    instructions: InstructionsType;
    RobotStatusType: RobotStatusType;
};

export type InputType = {
    grid: GridType;
    robots: Array<RobotType>;
};

export type ScentType = {
    coordinates: CoordinatesType;
    orientation: OrientationType;
    instruction: "F";
};

export type LimitType = {
    xo: number;
    xf: number;
    yo: number;
    yf: number;
};

// 5 3 (GRID)

// ROBOT 1
// 1 1 (COORDINATES) E (ORIENTATION) = POSITION
// RFRFRFRF (INSTRUCTIONS)

// ROBOT 2
// 3 2 N
// FRRFLLFFRRFLL

// ROBOT 3
// 0 3 W
// LLFFFRFLFL
