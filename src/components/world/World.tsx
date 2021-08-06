import * as React from "react";
import { Continents } from "./Continent";
import { Cities, CityProps } from "./City";
import { Rivers } from "./River";

interface worldProps {
    data: {
        points: Array<string>,
        cities: Array<CityProps>
        rivers: [
            {
                points: Array<string>
            }
        ]
    },
};

export const World = ({data}: worldProps) => {
    return (
        <g>
            <Continents points={data.points}/>
            <Zone/>
            <Cities cities={data.cities}/>
            <Rivers rivers={data.rivers} />
        </g>

    )
};

// zone
export const Zone = () => {
    return (
        <g>
            <circle cx="160" cy="250" r="150" stroke="red" strokeWidth="3" fill="none" />
        </g>
    );
}

export const Country = () => {
    // a polyne inside the continents
};
