import React from 'react'
import Country from './CountriesComponent.js';
import Header from './Header.js';
import CountriesFilterBar from './CountriesFilterBar.js';
/*global fetch*/
class CountryDashboardApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            countries:[],
            selectedTheme:'Light',
            filteredCountries:[],
            selectedRegion:'All'
        }
    }
    componentDidMount=()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(this.getCountries)
    }
    getCountries=(countries)=>{
        this.setState({countries: countries})
        this.setState({filteredCountries : countries})
    }
    filterCountriesByRegion=(region)=>{
        if(region === "All"){
            this.setState({filteredCountries:this.state.countries,selectedRegion:"All"})
        }
        else{
            let selectedCountriesByRegion = this.state.countries.filter(eachCountry=>{
                return (eachCountry.region.search(region)!==-1);
            })
            this.setState({filteredCountries:selectedCountriesByRegion,selectedRegion:region})
        }
    }
    filterCountriesByName=(selectedName)=>{
        const {selectedRegion}= this.state
        selectedName = selectedName.charAt(0).toUpperCase()+ selectedName.slice(1);
        if(this.state.selectedRegion === "All"){
            let selectedCountryByName = this.state.countries.filter(eachCountry=>{
            return eachCountry.name.search(selectedName)!==-1;    
        })
        this.setState({filteredCountries:selectedCountryByName})
        }
        else{
            let selectedCountryByName= this.state.countries.filter(eachCountry=>{
            return eachCountry.name.search(selectedName)!==-1 && eachCountry.region===selectedRegion;    
        })
        this.setState({filteredCountries:selectedCountryByName})
        }
    }
    onChangeTheme=()=>{
        let changeTheme=this.state.selectedTheme === "Light" ? "Dark" : "Light"
        this.setState({selectedTheme:changeTheme})
    }
    render(){
        const {filteredCountries} = this.state
        return(
        <div className={this.state.selectedTheme}>
           <Header onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
           <CountriesFilterBar 
           filterCountriesByRegion = {this.filterCountriesByRegion} 
           filterCountriesByName={this.filterCountriesByName}
           />
           <Country countries={filteredCountries}/>
        </div>    )
    }
}

export default CountryDashboardApp;