import * as React from "react";

interface riverProps {
    points:Array<any>
}

export const River = ({points}:riverProps) => {
    return <polyline points={points[0]} stroke="blue" stroke-width="3" fill="none"/>;
};