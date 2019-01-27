import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./screens/details.jsx";
import Home from "./screens/homescreen";
import Header from './comp/header';
import "./styles.css";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter >
        <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details' render = {(props) =><Details  {...props}/> }  />
        </Switch>
        </div>
        </BrowserRouter>
    </div>
   
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
