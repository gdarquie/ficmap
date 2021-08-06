import * as React from "react";

// continents
interface continentProps {
    points:Array<any>
}

const createContinent = (points:string) => {
    return <polyline points={points} stroke="black" stroke-width="3" fill="none"/>;
};

export const Continents = ({points}:continentProps) => {
    return (
        <g>
            {points.map(points => createContinent(points)) }
        </g>
    )
};