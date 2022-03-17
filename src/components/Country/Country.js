import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, population, region, name, flags, cca3} = props.country;
    // console.log(props.country);
    return (
        <div className='country bg-warning'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png}/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
            <p><small>CCA3 Key: {cca3}</small></p>
        </div>
    );
};

export default Country;