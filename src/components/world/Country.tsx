import * as React from "react";

export interface CountryProps {
    path:string
}

export interface CountriesProps {
    countries: Array<CountryProps>,
};

export const Country = (props:CountryProps) => {
    return (
        <g>
            <path d={props.path} stroke="#000" strokeWidth="1" fill="none"/>
        </g>
    );
};

export const Countries = ({countries}:CountriesProps) => {
    return (
        <g>
            {countries.map(country => Country(country)) }
        </g>
    )
};
