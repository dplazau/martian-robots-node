import { CARDINAL_POINTS, COMMANDS } from "../../entities/constants";
import { RobotInterface } from "../../entities/interfaces";
import {
    InstructionsType, PositionType,
    RobotStatusType
} from "../../entities/types";

class Robot implements RobotInterface {
    constructor(
        public position: PositionType,
        public instructions: InstructionsType,
        public robotStatus: RobotStatusType
    ) {
        this.position = position;
        this.instructions = instructions;
        this.robotStatus = robotStatus;
    }

    private executeCommand(command: string): void {
        let coordX: number = this.position.coordinates.x;
        let coordY: number = this.position.coordinates.y;

        const newOrientation: any = CARDINAL_POINTS.at(
            CARDINAL_POINTS.indexOf(this.position.orientation) +
                COMMANDS[command] >
                CARDINAL_POINTS.length - 1
                ? 0
                : CARDINAL_POINTS.indexOf(this.position.orientation) +
                      COMMANDS[command]
        );

        

        const newCoordinates = () => {
            if (this.position.orientation == "N") {
                coordY += 1;
                this.position.coordinates.y = coordY;
                // check validity of the new coordinate
            } else if (this.position.orientation == "E") {
                coordX += 1;
                this.position.coordinates.x = coordX;
                // check validity of the new coordinate
            } else if (this.position.orientation == "S") {
                coordY -= 1;
                this.position.coordinates.y = coordY;
                // check validity of the new coordinate
            } else {
                coordX -= 1;
                this.position.coordinates.x = coordX;
                // check validity of the new coordinate
            }
        };

        if (command === "F") {
            this.position.orientation = newOrientation;
            newCoordinates();
        } else {
            this.position.orientation = newOrientation;
        }
    }

    public async setInstructions(): Promise<void> {
        const commands: string[] = [...this.instructions];
        commands.forEach((command: string) => {
            return this.executeCommand(command);
        });
    }
}

export default Robot;
