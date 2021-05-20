import logo from './logo.svg';
import './App.css';
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import Recipe from "./pages/Recipe";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="d-flex">
            <Link className="m-20" to="/">Home</Link>
            <Link className="m-20" to="/upload">Upload</Link>
            <Link className="m-20" to="/favorites">Favorites</Link>
          </div>

          <Switch>
            <Route exact path="/">
              <Gallery favorites={false}/>
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/recipe/:id">
              <Recipe/>
            </Route>
            <Route path="/favorites">
              <Gallery favorites={true}/>
            </Route>

          </Switch>

        </div>
      </Router>
  );
}

export default App;
