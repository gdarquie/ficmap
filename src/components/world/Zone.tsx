import * as React from "react";

export interface ZoneProps {
    cx:string,
    cy:string,
    r: string,
};

export interface ZonesProps {
    zones: Array<ZoneProps>,
};

export const Zone = ({cx, cy, r}:ZoneProps, index:number) => {
    return (
        // <circle  key={'zone-' + index} cx="160" cy="250" r="150" stroke="red" strokeWidth="3" fill="none" />
        <circle  key={'zone-' + index} cx={cx} cy={cy} r={r} stroke="red" strokeWidth="3" fill="none" />

    );
}

export const Zones = ({zones}:ZonesProps) => {
    return (
        <g>
            {zones.map((zone, index) => Zone(zone, index)) }
        </g>
    );
};