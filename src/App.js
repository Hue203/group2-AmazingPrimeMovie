import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./LayOut/HomePage";
import DetaiPage from "./LayOut/MovieDetaiPage";
import PublicNavBar from "./components/PublicNavbar";
import SearchBox from "./components/SearchBox/index";

function App() {

  const [query, setQuery] = useState("");
  return (
    <>
      <Router>
        <PublicNavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" exact component={DetaiPage} />
        </Switch>
      </Router>
       <SearchBox setQuery={setQuery} />
    </>
  );
}

export default App;
