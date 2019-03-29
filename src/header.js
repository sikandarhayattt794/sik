import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
     <div className="App-header"> 
          
    <noscript>You need to enable JavaScript to run this app.</noscript>
    
  
   

    <div id='cssmenu'>
    <ul>
       <li class='active'><a href='#home'>Home</a></li>
      
     <li><a href='#products'>Products</a></li>
     
      <li><a href='#company'>Company</a></li>
       
    <li><a href='#contact'>Contact</a></li>
    </ul>
    </div>
    

    
  


     </div>
    );
  }
}

export default Header;
