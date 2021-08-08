import * as React from "react";
import { World} from '../world/World';
import { CityProps } from "../world/City";
import { CountryProps } from "../world/Country";

interface Props {
    width: number,
    height: number,
    worldPoints: Array<string>,
    map: {
        world: {
            points: Array<string>,
            cities: Array<CityProps>
            rivers: [
                {
                    points: Array<string>
                }
            ],
            countries: Array<CountryProps>
        },
    }
}

export const SvgLayoutFromModule = ({width, height, map}:Props) => {
    return (
        <svg height={height} width={width}>
            <g>
                <rect width={width-25} height={height-50} fill="none" strokeWidth="1" stroke="rgb(0,0,0)"></rect>
                <World data={map.world}/>
            </g>
        </svg>
    ) 
}
