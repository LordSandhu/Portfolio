
import './App.css';
import HomePage from './pages/HomePage.';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cm from './pages/Cm'
import Profile from './pages/Profile';
import Project from './pages/Project';
import Files from './pages/Files';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/Profile" exact exact component={Profile}></Route>
    <Route path="/Projects" exact component={Project}></Route>
    <Route path="/Cm"  exact component={Cm}></Route>
    <Route path="/Files"  exact component={Files}></Route>
    <Route></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
