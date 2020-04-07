import React from 'react'
import './style.css';
import {withRouter} from 'react-router-dom';
//import CountryDetails from './CountryDetails.js'
class CountryCard extends React.Component{
    
    getCountryDetails=(obj)=>{
    this.props.history.push({pathname:`/country-dashboard-app/${obj.alpha3Code}`})
    }
    render(){
        const {country} = this.props
        return(
            <div className="each-country" onClick={()=>this.getCountryDetails(country)}>
                <img src={country.flag} alt={country.name} className="image"/>
                <div className="country-details padding">
                    <h2 className="country-name padding"> {country.name}</h2>
                    <p className="padding">Population : {country.population}</p>
                    <p className="padding">Region : {country.region}</p>
                    <p className="padding">Capital : {country.capital}</p>
                </div>
            </div>
            )
    }
}
export default withRouter(CountryCard); 