import React from 'react';
import {withRouter} from "react-router-dom"
import Header from './Header.js'
import './style.css';
/*global fetch*/

class CountryDetails  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countriesDetails:[],
            all:[]
        }
    }
    componentDidMount=()=>{
     this.getCountries();
 }   
 async getCountries(){
    let data = await fetch('https://restcountries.eu/rest/v2/all');
    data = await data.json();
     let alpha3code = this.props.match.params.alpha3Code;
     let newList=[];
     let All=[]
     data.forEach((eachobj)=>{
         All.push(eachobj)
         if(alpha3code === eachobj.alpha3Code){
         newList.push(eachobj)}
     })
     this.setState({countriesDetails:newList,all:All})
 }
       navigateBack=()=>{
        this.props.history.push('/country-dashboard-app')
     //this.props.history.goBack();
    }
    
    getCountryDetails=(obj)=>{
        this.props.history.push({pathname:`/country-dashboard-app/${obj}`})
        this.getCountries()
    }
    getNamebyalpha3code=(obj)=>{
        let Name=this.state.all.map(eachobj=>{
            if(obj=== eachobj.alpha3Code){
                return eachobj.name
            } 
            return null;
        })
        return Name
    }
    renderBorders=(obj)=>{
    return obj.borders.map((eachborder)=>
    <button className={`border-buttons ${this.props.selectedTheme}`} key={eachborder} onClick={()=>this.getCountryDetails(eachborder)}>{this.getNamebyalpha3code(eachborder)}</button>)
    }
    render(){
        console.log(this.props)
        const {onChangeTheme,selectedTheme}=this.props
        const {countriesDetails}=this.state
 if(this.state.countriesDetails.length!==0){
        return(
    <div className={`country-details-container ${selectedTheme}`}>
        <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
        <button onClick={this.navigateBack} className={`go-back ${selectedTheme}`}>Go back</button>
        <div className="new-country-details">
            <img className="country-details-img" src={countriesDetails[0].flag} alt="flag"/>
            <div className="right-side">
              <h1 className="title">{countriesDetails[0].name}</h1>
              <div className="flex">
                    <div className="left-side-country-details">
                        <p><b>Native Name: </b>{countriesDetails[0].nativeName}</p>
                        <p><b>Population: </b>{countriesDetails[0].population}</p>
                        <p><b>Region: </b>{countriesDetails[0].region}</p>
                        <p><b>Sub Religion: </b>{countriesDetails[0].subregion}</p>
                        <p><b>Capital: </b>{countriesDetails[0].capital}</p>
                    </div>
                    <div>
                    <p><b>Top Level Domain: </b>{countriesDetails[0].topLevelDomain[0]}</p>
                    <p><b>Currencies: </b>{countriesDetails[0].currencies.map(eachobj=>eachobj.name).join(", ")}</p>
                    <p><b>Languages: </b>{countriesDetails[0].languages.map((eachobj)=>eachobj.name).join(", ")}</p>
                   </div>
               </div>
               <p className="borders"><b>Border Countries :</b>{this.renderBorders(countriesDetails[0])}</p>
            </div>
        </div>
    </div>
            )}
            return <h1>Loading.....</h1>;
    }
}
export default withRouter(CountryDetails)