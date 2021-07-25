import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./LayOut/HomePage";
import DetaiPage from "./LayOut/DetaiPage";
import PublicNavBar from "./components/PublicNavbar";
import FooterBar from "./components/FooterBar";
import PopularPage from "./LayOut/PopularPage";
import TrendingPage from "./LayOut/TrendingPage";
import TopRatedPage from "./LayOut/TopRatedPage";
import NowPlayingPage from "./LayOut/NowPlayingPage";

function App() {
  return (
    <>
      <Router>
        <PublicNavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/movie/:id" exact component={DetaiPage} />
          <Route path="/popular" component={PopularPage} />
          <Route path="/trending" component={TrendingPage} />
          <Route path="/toprated" component={TopRatedPage} />
          <Route path="/nowplaying" component={NowPlayingPage} />
        </Switch>

        <FooterBar />
      </Router>
    </>
  );
}

export default App;
