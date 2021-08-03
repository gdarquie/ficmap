import * as React from "react";
import { CityProps, World} from '../world/World';

interface Props {
    width: number,
    height: number,
    worldPoints: Array<string>,
    map: {
        world: {
            points: Array<string>,
            cities: Array<CityProps>
        },
    }
}

export const SvgLayoutFromModule = ({width, height, map}:Props) => {
    return (
        <svg height={height} width={width}>
            <g>
                <rect width={width-50} height={height-50} fill="none" strokeWidth="1" stroke="rgb(0,0,0)"></rect>
                <World data={map.world}/>
            </g>
        </svg>
    ) 
}
