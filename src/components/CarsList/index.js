//divide into react component


//TodosApp
//  - UserInput
//  - TodoList
//       - todos
//           - Checkbox
//           - TodoInput
//           - Remove Icon
//  - TodoFoter
//       - ActiveTodosCount
//       - TodoFilters
//           - All Button
//           - Active Button
//           - Completed Button
//           - Clear Completed Button

import React from 'react';
import {Car} from './car.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Car/ >
    </div>
  );
}