import React from 'react'
import SelectionRegion from './SelectionRegion.js';
import SearchCountry from './SearchCountry.js';
class CountriesFilterBar extends React.Component{
    render(){
        return(
            <div className="filter-component">
                <SearchCountry
                    filterCountriesByName={this.props.filterCountriesByName}
                    selectedTheme={this.props.selectedTheme}/>
                <SelectionRegion
                    filterCountriesByRegion={this.props.filterCountriesByRegion}
                    selectedTheme={this.props.selectedTheme}/>
            </div>
            )
    }
}
export default CountriesFilterBar;