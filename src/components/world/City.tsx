import * as React from "react";

export interface CityProps {
    x:string,
    y:string,
    label:string,
    type?:string,
    link?: string,
};

export interface CitiesProps {
    cities: Array<CityProps>,
};

export const City = ({x, y, label, type = 'default', link='http://wiki.ficti.fr'}:CityProps, index:number) => {
    const fillColor = (type == 'capital') ? 'red' :'black';

    return (
        <g key={'city-' + index}>
            <a target='_blank' href={link}>
                <text x={x} y={parseInt(y)-5} fill={fillColor}>{label}</text>
            </a>
            <circle cx={x} cy={y} r="3" stroke={fillColor} strokeWidth="1" fill="none" />
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