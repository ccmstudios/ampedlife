import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Clientportal from './pages/clientportal'
import Services from './pages/services'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import './assets/css/ampedlife.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
<div>
  <Switch>
<Route exact path ='/' component ={Home}/>
<Route exact path ='/about' component ={About}/>
<Route exact path ='/blog' component ={Blog}/>
<Route exact path ='/contact' component ={Contact}/>
<Route exact path ='/clientportal' component ={Clientportal}/>
<Route exact path ='/services' component ={Services}/>

   <Home/>
  </Switch>
</div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
