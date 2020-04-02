import React from 'react';
//import CountryCard from "./CountryCard.js"
import './assignment4.css';
class Country extends React.Component{
    render(){
        const {countries} = this.props;
        return(
            
            <div className = "outer-container">
            {
            
                countries.map(country =>
                <div className="each-country">
                <img src={country.flag} alt="countryFlag" className="image"/>
                <div className="country-details">
                <div className="country-name">{country.name}</div>
                <div><b>Population</b> : {country.population}</div>
                <div><b>Region</b> : {country.region}</div>
                <div><b>Capital</b> : {country.capital}</div>
                </div>
                
                </div>
                )
            }
            </div>
            )
    }
}
export default Country;