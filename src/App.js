import React, {Component} from 'react'
import Login from './Login' 
import Register from './Register';
import Dashboard from './Dashboard'
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class App extends Component {
    render() {
      return (
        <Router>

          <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Sample-Login-React</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Link to={'/Login'} className="nav-link">Login</Link>
              <Link to={'/Signup'} className="nav-link">Register</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            <Switch>
              <Route exact path='/Login' component={Login} />
              <Route path='/Signup' component={Register} />
              <Route path='/Dashboard' component={Dashboard} />
              <Route path='/' component={Register} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  export default App