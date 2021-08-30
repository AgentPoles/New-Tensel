import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Profile from "views/profile.js";
import Home from "./home/home";
import Toogle from "./home/toogle";
import ViaPeer from "./viapeer/index";
import ShortProfile from "./viapeer/shortprofile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ViaPeer" exact component={ViaPeer} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Home} />
        <Route path="/shortprofile" exact component={ShortProfile} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
