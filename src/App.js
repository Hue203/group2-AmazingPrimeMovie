import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./LayOut/HomePage";
import DetaiPage from "./LayOut/MovieDetaiPage";
import PublicNavBar from "./components/PublicNavbar";

function App() {
  return (
    <>
      <Router>
        <PublicNavBar />
        <Switch>
          {/* <Route path="/trending" exact component={TrendingPage} /> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" exact component={DetaiPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
