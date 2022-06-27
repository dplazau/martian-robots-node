import {
    CoordinatesType,
    GridType,
    InstructionsType,
    OrientationType,
    PositionType,
    RobotStatusType,
    LimitType,
} from "../types";

export interface RobotInterface {
    position: PositionType;
    instructions: InstructionsType;
    robotStatus: RobotStatusType;
}

export interface CommandInterface {
    coordinates: CoordinatesType;
    orientation: OrientationType;
}

export interface GridInterface {
    current: GridType;
    min?: GridType;
    max?: GridType;
    limits?: LimitType;
    scents?: Array<PositionType>;
}
