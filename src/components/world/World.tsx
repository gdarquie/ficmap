import * as React from "react";

interface worldProps {
    data: {
        points:Array<any>,
    }
}

export const World = ({data}: worldProps) => {
    return (
        <g>
            <Continent points={data.points}/>
            <Zone/>
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

export const Continent = ({points}:continentProps) => {
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
}

export const River = () => {
    // a polyline in blue
}

export const City = () => {
    // a circle with a name (text)
}
