import React from 'react'
import Country from './Countries.js';
import Header from './Header.js';
import {withRouter} from 'react-router-dom'
import CountriesFilterBar from './CountriesFilterBar.js';
/* global fetch */
class CountryDashboardApp extends React.Component{
    constructor(props){
    super(props)
    this.state={
        countries:[],
        filteredCountries:[],
        selectedRegion:"All",
        selectedCountry:null,
        countryName:'',
        loading:false
    }
    }
 componentDidMount=()=>{
     fetch("https://restcountries.eu/rest/v2/all")
     .then(response => response.json())
     .then(this.getCountries)
 }   
 getCountries=(countries)=>{
     this.setState({countries : countries,filteredCountries : countries,loading:true})
 }
 filterCountriesByRegion=(region)=>{
     let {countryName} = this.state;
     countryName=countryName.toUpperCase()
     if(region === "All"){
         if(countryName===""){
         this.setState({filteredCountries:this.state.countries,selectedRegion:"All",countryName:""})
         }
         else{
                let selectedCountriesByRegion = this.state.countries.filter(eachCountry=>{
             return (eachCountry.name.toUpperCase().includes(countryName)) ;
         })
         this.setState({filteredCountries:selectedCountriesByRegion,selectedRegion:region}) 
         }
     }
     else{
         if(countryName===""){
         let selectedCountriesByRegion = this.state.countries.filter(eachCountry=>{
             return (eachCountry.region.includes(region)) ;
         })
         this.setState({filteredCountries:selectedCountriesByRegion,selectedRegion:region,countryName:""})
         }
         else{
             let selectedCountriesByRegion = this.state.countries.filter(eachCountry=>{
             return (eachCountry.region.includes(region) && eachCountry.name.toUpperCase().includes(countryName)) ;
         })
         this.setState({filteredCountries:selectedCountriesByRegion,selectedRegion:region})
         }
     }
 }
   
 filterCountriesByName=(selectedName)=>{
     const {selectedRegion} = this.state
    selectedName = selectedName.toUpperCase()
     if(this.state.selectedRegion === "All"){
         let selectedCountryByName=this.state.countries.filter(eachCountry=>{
         return eachCountry.name.toUpperCase().includes(selectedName);
     })
     this.setState({filteredCountries:selectedCountryByName,countryName:selectedName})
     }
     else{
         let selectedCountryByName=this.state.countries.filter(eachCountry=>{
         return eachCountry.name.toUpperCase().includes(selectedName) && eachCountry.region===selectedRegion;
     })
     this.setState({filteredCountries:selectedCountryByName,countryName:selectedName})
     }
 }
 navigateBack=()=>{
     this.props.history.push('/')
 }
 render(){
     const {filteredCountries} = this.state
     const {onChangeTheme,selectedTheme}=this.props
if(this.state.loading){
     return(
         <div className={` ${selectedTheme}`}>
             <button className={`go-back ${selectedTheme}`} onClick={this.navigateBack}> Go Back</button>
             <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
             <CountriesFilterBar 
                 filterCountriesByRegion={this.filterCountriesByRegion}
                 filterCountriesByName={this.filterCountriesByName}
                 selectedTheme={this.props.selectedTheme}
             /> 
             {this.state.filteredCountries.length!==0? <Country countries={filteredCountries}/>:<h1 className="no-data">No Data Found</h1>}
             
         </div>
         )}
         return(
             <div className={`country-details-container ${selectedTheme}`}>
              <button className={`go-back ${selectedTheme}`} onClick={this.navigateBack}> Go Back</button>
             <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
             <CountriesFilterBar 
                 filterCountriesByRegion={this.filterCountriesByRegion}
                 filterCountriesByName={this.filterCountriesByName}
                 selectedTheme={this.props.selectedTheme}
             /> 
             <div className="loader"></div>
             </div>
        )
 }
}

export default withRouter(CountryDashboardApp);