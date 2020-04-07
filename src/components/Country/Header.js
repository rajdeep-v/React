import React from 'react';
import {FaRegMoon} from 'react-icons/fa'

class Header extends React.Component{
    render(){
        const {selectedTheme} = this.props
        return(
            <div className="header-section">
            <h1 className="header-heading">Where in the world?</h1>
            <p onClick={this.props.onChangeTheme} className="mode"><b><FaRegMoon/> {selectedTheme} Mode</b></p>
            </div>
            )
    } 
}
export default Header;