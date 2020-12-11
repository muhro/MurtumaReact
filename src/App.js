import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './component/header'
import Home from './views/home'
import Events from "./views/events";
import Artist from "./views/artist";
import Media from "./views/media";
import Contact from "./views/contact";


function App() {
  return (
      <div className="h-screen h-full bg-black">
          <Router>
              <Header/>

            <Switch>
                <Route exact path = "/~lauriaus/MurtumaReact/"> <Home/> </Route>
                <Route exact path = "/events"> <Events/> </Route>
                <Route exact path = "/artist"> <Artist/> </Route>
                <Route exact path = "/media"> <Media/> </Route>
                <Route exact path = "/contact"> <Contact/> </Route>

            </Switch>

          </Router>
      </div>
  );
}

export default App;
