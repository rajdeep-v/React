import React from 'react';

class Header extends React.Component{
    render(){
    const {selectedTheme} = this.props
    return(
        <div className="header-section">
        <h1>Where in the world?</h1>
        <p onClick={this.props.onChangeTheme}>{selectedTheme} Mode</p>
        </div>
        )
    }
}
export default Header;