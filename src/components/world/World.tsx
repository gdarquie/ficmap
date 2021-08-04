import * as React from "react";
import { Continents } from "./Continent";
import { Cities, CityProps } from "./City";

interface worldProps {
    data: {
        points:Array<any>,
        cities:Array<CityProps>,
    };
};

export const World = ({data}: worldProps) => {
    return (
        <g>
            <Continents points={data.points}/>
            <Zone/>
            <Cities cities={data.cities}/>
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
