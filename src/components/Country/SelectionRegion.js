import React from 'react';

class SelectionRegion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedRegion:"All"
        }
    }
    onChangeValue=(event)=>{
        this.setState({selectedRegion:event.target.value})
        this.props.filterCountriesByRegion(event.target.value)
    }
    render(){
        return(
            <select value={this.state.selectedRegion} onChange={this.onChangeValue} size="5">
               <option value="All">All</option>
               <option value="Africa">Africa</option>
               <option value="Americas">Americas</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europe</option>
               <option value="Oceania">Oceania</option>
            </select>   
            )
    }
}
export default SelectionRegion;