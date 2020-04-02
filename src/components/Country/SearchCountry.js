import React from 'react';

class SearchCountry extends React.Component{
    submit=(event)=>{
    this.props.filterCountriesByName(event.target.value)
    }
    render(){
        return(
            <div>
            <input placeholder="Search for a country" type="text" onChange={this.submit}/>
            </div>
            )
    }
}
export default SearchCountry;