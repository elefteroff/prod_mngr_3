import './App.css';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Update from './views/Update';
import ProdDetail from './views/ProdDetail';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/pms/:id">
          <ProdDetail />
        </Route>

        <Route exact path="/:id/edit">
          <Update />
        </Route>

        <Route exact path="/pm">
          <Main />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
