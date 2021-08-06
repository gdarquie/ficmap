import * as React from "react";

export interface CityProps {
    x:string,
    y:string,
    label:string,
};

export interface CitiesProps {
    cities: Array<CityProps>,
};

export const City = ({x, y, label}:CityProps, index:number) => {
    return (
        <g key={'city-' + index}>
            <text x={x} y={parseInt(y)-5} fill="red">{label}</text>
            <circle cx={x} cy={y} r="3" stroke="black" strokeWidth="1" fill="none" />
        </g>
    );
}

export const Cities = ({cities}:CitiesProps) => {
    return (
        <g>
            {cities.map((city, index) => City(city, index)) }
        </g>
    );
};