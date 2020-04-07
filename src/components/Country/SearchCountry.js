import React from 'react';
import {FaSearch} from 'react-icons/fa'

class SearchCountry extends React.Component{

    submit=(event)=>{
    this.props.filterCountriesByName(event.target.value) 
    }
    render(){
        return(
            <div className="search-country-container">
            <FaSearch className="search-icon"/>
            <input placeholder="Search for a country..." type="text" onChange={this.submit} className={`search-country ${this.props.selectedTheme}`}/>
            </div>
            )
    }
}
export default SearchCountry;