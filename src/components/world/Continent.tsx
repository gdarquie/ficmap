import * as React from "react";

// continents
interface continentProps {
    points:Array<any>
}

const createContinent = (points:string) => {
    return (
        <g>
            <defs>
            <filter id="f1" x="0" y="0" width="200%" height="200%">
                    <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            <polyline points={points} stroke="black" strokeWidth="3" fill="none" filter="url(#f1)"/>
        </g>
    );
};

export const Continents = ({points}:continentProps) => {
    return (
        <g>
            {points.map(points => createContinent(points)) }
        </g>
    )
};