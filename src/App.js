import Header from './components/Header'
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Router>
            <div className="container">
              <Header title='FireSquad Legion'/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/home" component={MainPage}/>
                    <Route path="/about" component={AboutUs}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
      </Router>
  );
}


export default App;
