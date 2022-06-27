import { GRID_MAX, GRID_MIN } from "../../entities/constants";
import { GridInterface } from "../../entities/interfaces";
import {
    CoordinatesType,
    GridType,
    InputType,
    LimitType,
    PositionType,
} from "../../entities/types";

class PlanetGrid implements GridInterface {
    constructor(
        public current: InputType["grid"],
        readonly min: GridType = GRID_MIN,
        readonly max: GridType = GRID_MAX,
        public limits: LimitType,
        public scents: Array<PositionType>
    ) {
        this.current = current;
        this.min = min;
        this.max = max;
        this.limits = limits;
        this.scents = [];
    }

    private validateGrid(): boolean {
        return (
            this.min.width <= this.current.width &&
            this.current.width <= this.max.width &&
            this.min.length <= this.current.length &&
            this.current.length <= this.max.length
        );
    }

    public defineLimits(): void {
        if (this.validateGrid()) {
            this.limits.xo = 0;
            this.limits.xf = this.current.width;
            this.limits.yo = 0;
            this.limits.yf = this.current.length;
        }
    }

    public checkCoordinates(currentCoordinates: CoordinatesType): boolean {
        let isValid: boolean =
            this.limits.xo <= currentCoordinates.x &&
            currentCoordinates.x <= this.limits.xf &&
            this.limits.yo <= currentCoordinates.y &&
            currentCoordinates.y <= this.limits.yf;

        return isValid ? true : false;
    }

    public addScent(position: PositionType): void {
        this.scents.push(position);
    }

    public checkScent(currentPosition: PositionType): boolean {
        let isScent = this.scents.find(
            (scent) =>
                scent.coordinates.x === currentPosition.coordinates.x &&
                scent.coordinates.y === currentPosition.coordinates.y &&
                scent.orientation === currentPosition.orientation
        );
        return isScent ? true : false;
    }
}

export default PlanetGrid;
