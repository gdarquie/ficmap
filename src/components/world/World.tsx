import * as React from "react";

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

export const River = () => {
    // a polyline in blue
};


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