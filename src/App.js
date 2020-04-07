// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";

// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CountryDashboardApp from './components/Country/CountryDashboardApp.js';
import CountryDetails from './components/Country/CountryDetails.js'
import Home from './components/Home.js'

class App extends React.Component {
  state={
    selectedTheme:"Light"
  }
   onChangeTheme=()=>{
   let changeTheme= this.state.selectedTheme === "Light" ? "Dark" : "Light"
   this.setState({selectedTheme:changeTheme})
 }

  render(){
  return (
    <Router>
        <Switch>
          <Route exact path="/country-dashboard-app">
            <CountryDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          <Route exact path="/country-dashboard-app/:alpha3Code">
            <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
     </Router>
  );
  }
}
export default App
