import * as React from "react";
import { Continents } from "./Continent";
import { Cities, CityProps } from "./City";
import { Rivers } from "./River";
import { Countries, CountryProps } from "./Country";

interface worldProps {
    data: {
        points: Array<string>,
        cities: Array<CityProps>
        rivers: [
            {
                points: Array<string>
            }
        ],
        countries: Array<CountryProps>,
    },
};

export const World = ({data}: worldProps) => {
    return (
        <g>
            <Continents points={data.points}/>
            <Zone/>
            <Cities cities={data.cities}/>
            <Rivers rivers={data.rivers} />
            <Countries countries={data.countries} />
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

