import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {
    render() {
        
        const fullName = JSON.parse(localStorage.getItem('user')).fullName;
        toast.success("Login Successful!")
        
      return ( 
        <div>
          <p>Welcome {fullName}! You are now logged in.</p>
          <ToastContainer />
        </div>
      );
    }
  }

  export default Dashboard