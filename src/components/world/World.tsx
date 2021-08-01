import * as React from "react";

export const World = () => {
    return (
        <g>
            <Continent/>
            <Zone/>
        </g>

    )
};

export const Continent = () => {
    return (
        <g>
            <polyline points="20,90 70,65 120,67 170,73 220,57 270,58 320,40 370,35 420,30 470,47 520,76 570,85 620,112 670,134, 690,178"
            stroke="black" stroke-width="3" fill="none" />
            <polyline points="690,178 670,329, 620,450 570,578 520,478 470,512 420,578 370,524 320,510 270,478 220,332 170,274 120,294 70,272 20,90"
            stroke="black" stroke-width="3" fill="none" />
        </g>
    );
};

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
