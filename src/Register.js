import React, { Component } from 'react';
import { Button, Container, Form, Row, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Email:'',
     FullName:'',
     Password: ''
    }

    this.Password = this.Password.bind(this);
    this.FullName = this.FullName.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.register.bind(this);
  }
 
  
  Email(event) {
    
  this.setState({ Email: event.target.value })
    
  }

  FullName(event){
      this.setState({FullName: event.target.value})
  }

  Password(event) {
    
   this.setState({ Password: event.target.value })
  
  }

  
  register=(event)=>{
    let value={
      email:this.state.Email,
      fullName:this.state.FullName,
      password:this.state.Password,
      
    }
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    if(emailRegex.test(value.email)){
    localStorage.setItem('user',JSON.stringify(value));
    toast.success("Success Notification !");
    this.props.history.push('/login');
    }
    else{
        toast.error("Enter a valid email")
    }
   
  }
  render (){
   
      return (
      
        <Container>
          <Row className="mt-5 justify-content-center">
            <Form>
              <Form.Group controlId="formFullName">
                <Form.Label>FullName</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" onChange={this.FullName}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.Email} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.Password} />
              </Form.Group>
              <Button variant="primary" onClick={this.register}>
                Register
        </Button>
            </Form>
          </Row>
          <ToastContainer />
        </Container>
        
      )
  }
}

export default Register