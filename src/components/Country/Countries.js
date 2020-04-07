import React from "react";
import CountryCard from "./CountryCard.js"

class Country extends React.Component{
    render(){
        const {countries} = this.props
        return(
           <div className="outer-container">
           {
               countries.map(eachCountry => <CountryCard country={eachCountry} key={eachCountry.name}/>)
           }
           </div>
            )
    }
}
export default Country