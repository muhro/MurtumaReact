import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NoMatch from 'react-router-nomatch';
import Header from './component/header'
import Footer from './component/footer'
import Home from './views/home'
import Events from "./views/events";
import Artist from "./views/artist";
import Media from "./views/media";
import Contact from "./views/contact";


function App() {

    const NotFound = ({ location }) => (
        <h3>No match for <code>{location.pathname}</code></h3>
    )

  return (
      <div className="h-screen h-full bg-black flex flex-col">
          <Router>
              <Header/>
            <Switch>
                <Route exact path = "/" component={Home}>  <Home/></Route>
                <Route exact path = "/events" component={Events}> <Events/></Route>
                <Route exact path = "/artist" component={Artist}> <Artist/> </Route>
                <Route exact path = "/media" component={Media}> <Media/> </Route>
                <Route exact path = "/contact" component={Contact}> <Contact/> </Route>
                <Route component={NotFound}></Route>
            </Switch>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
