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

import { useState } from "react";
import SearchForm from "./components/SearchTest";
const baseUrl = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const imgLink = process.env.REACT_APP_IMAGE;
function App() {
  const [page, setPage] = useState(1);
  const [listMovie, setListMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [appError, setAppError] = useState("");
  const getMovie = async () => {
    try {
      let url = `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("movie", data);
      setListMovie(data.results);
      setAppError("");
    } catch (error) {
      console.log("erro", error.msg);
      setAppError("erro", error.msg);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("movie", data);
      setListMovie(data.results);
      setAppError("");
    } catch (error) {
      console.log("erro", error.msg);
      setAppError("erro", error.msg);
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Router>
        <PublicNavBar />
        {/* <SearchForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          searchTerm={searchTerm}
        /> */}
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
