import * as React from "react";

interface riverProps {
    points:Array<any>
}

interface riversProps {
    rivers: Array<riverProps>
}

export const River = ({points}:riverProps, index:number) => {
    return <polyline key={index} points={points[0]} stroke="blue" strokeWidth="3" fill="none"/>;
};

export const Rivers = ({rivers}:riversProps) => {
    return (
        <g>
            {rivers.map((river, index) => River(river, index))}
        </g>
    )
};