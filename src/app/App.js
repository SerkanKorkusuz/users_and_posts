import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Users from "../containers/Users";
import Posts from "../containers/Posts";
import LastViewedUsers from "../components/LastViewedUsers";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <div className="col-md-9">
          <Switch>
            <Route path="/posts" component={Posts}/>
            <Route exact path="/" component={Users}/>
          </Switch>
        </div>
        <div className="col-md-3">
          <LastViewedUsers/>
        </div>
      </div>
    </div>
  );
}

export default App;
