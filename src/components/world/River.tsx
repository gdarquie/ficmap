import * as React from "react";

interface riverProps {
    points:Array<any>
}

interface riversProps {
    rivers: Array<riverProps>
}

export const River = ({points}:riverProps) => {
    return <polyline points={points[0]} stroke="blue" stroke-width="3" fill="none"/>;
};

export const Rivers = ({rivers}:riversProps) => {
    return (
        <g>
            {rivers.map(river => River(river))}
        </g>
    )
};