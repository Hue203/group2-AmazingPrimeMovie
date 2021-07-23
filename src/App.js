import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetaiPage from "./Pages/DetaiPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" exact component={DetaiPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
