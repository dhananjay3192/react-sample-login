import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Email:'',
     Password: ''
    }

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }
 
  
  Email(event) {
    
  this.setState({ Email: event.target.value })
    
  }

  Password(event) {
    
   this.setState({ Password: event.target.value })
  
  }

  
  login=(event)=>{
    let value={
      email:this.state.Email,
      password:this.state.Password
    }
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    if(emailRegex.test(value.email)){
    let store=JSON.parse(localStorage.getItem('user'))
    console.log(store)
    if(value.email==store.email && value.password==store.password)
    {
      //console.log("success")
      this.props.history.push('/dashboard');
      
     
    }
    else{
      toast.error("Authentication Failed !");
    }
  }
  else{
    toast.error("Invalid Email!")
  }
  }
  render (){
   
      return (
      
        <Container>
          <Row className="mt-5 justify-content-center">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.Email} />
               
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.Password} />
              </Form.Group>
              <Button variant="primary" onClick={this.login}>
                Login 
        </Button>
            </Form>
          </Row>
          <ToastContainer />
        </Container>
      )
  }
}

export default Login