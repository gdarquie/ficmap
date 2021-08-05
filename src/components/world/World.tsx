import * as React from "react";
import { Continents } from "./Continent";
import { Cities, CityProps } from "./City";
import { River } from "./River";

interface worldProps {
    data: {
        points: Array<string>,
        cities: Array<CityProps>
        rivers: {
            points: Array<string>
        }
    },
};

export const World = ({data}: worldProps) => {
    console.log(data.rivers.points);
    return (
        <g>
            <Continents points={data.points}/>
            <Zone/>
            <Cities cities={data.cities}/>
            <River points={data.rivers.points} />
        </g>

    )
};

// zone
export const Zone = () => {
    return (
        <g>
            <circle cx="160" cy="250" r="150" stroke="red" stroke-width="3" fill="none" />
        </g>
    );
}

export const Country = () => {
    // a polyne inside the continents
};
