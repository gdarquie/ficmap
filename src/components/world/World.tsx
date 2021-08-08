import * as React from "react";
import { Continents } from "./Continent";
import { Cities, CityProps } from "./City";
import { Rivers } from "./River";
import { Countries, CountryProps } from "./Country";
import { ZoneProps, Zones } from "./Zone";

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
        zones: Array<ZoneProps>,
    },
};

export const World = ({data}: worldProps) => {
    return (
        <g>
            <Continents points={data.points}/>
            <Zones zones={data.zones} />
            <Cities cities={data.cities}/>
            <Rivers rivers={data.rivers} />
            <Countries countries={data.countries} />
        </g>

    )
};
