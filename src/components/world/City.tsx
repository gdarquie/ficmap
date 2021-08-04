import * as React from "react";

export interface CityProps {
    x:string,
    y:string,
    label:string,
};


export const City = ({x, y, label}:CityProps) => {
    return (
        <g>
            <text x={x} y={parseInt(y)-5} fill="red">{label}</text>
            <circle cx={x} cy={y} r="3" stroke="black" stroke-width="1" fill="none" />
        </g>
    );
}

export interface CitiesProps {
    cities: Array<CityProps>,
};

export const Cities = ({cities}:CitiesProps) => {
    return (
        <g>
            {cities.map(city => City(city)) }
        </g>
    );
};