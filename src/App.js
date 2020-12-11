import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './component/header'
import Home from './views/home'


function App() {
  return (
      <div className="h-screen bg-black">
          <Router>
              <Header/>

            <Switch>
                 <Route exact path = "/"> <Home/> </Route>
            </Switch>

          </Router>
      </div>
  );
}

export default App;
