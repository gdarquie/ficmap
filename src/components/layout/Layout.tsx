import * as React from "react";
import { World} from '../world/World';

interface Props {
    width: number,
    height: number,
}

export const SvgLayoutFromModule = ({width, height}:Props) => {
    return (
        <svg height={height} width={width}>
            <g>
                <rect width={width-50} height={height-50} fill="none" strokeWidth="1" stroke="rgb(0,0,0)"></rect>
                <World/>
            </g>
        </svg>
    ) 
}
