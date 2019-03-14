import React from "react";
import { Link } from "react-router-dom";
import reactLogo from '../images/logo.svg';

const logoWrapper = {
    display: 'block',
    width : '150px',
    float : 'left',
    textAlign : 'center'
};

const Navigation = props => {
  const is_Login = JSON.parse(localStorage.getItem("is_Login"));
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem('full_name');
  console.log('is_Login', is_Login);

    return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-md-3 col-sm-6 offset-md-0">
        <div className="myLogo">
        <img src={reactLogo} style={{width:"30%", float:"left", marginTop:"0px", paddingTop:"0px", marginRight:"0px"}}/>
          <p style={{ paddingTop:"15px", marginRight:"12px"}}> <b>Movie</b> </p>
        </div>
      </div>    
    
      <div className="col-md-8 col-sm-6 offset-md-1">
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:"15px", marginTop:"15px"}}>
          <ul className="navbar-nav mr-auto" >
              <li className='menu' style={{paddingRight:"30px"}}>
                  <Link to='/'>Home</Link>
              </li>
              <li className='menu' style={{paddingRight:"30px"}}>
                  <Link to='/profile'>Profile</Link>
              </li>
              <li className='menu' style={{paddingRight:"30px"}}>
                  <Link to='/signin'>Sign In</Link>
              </li>
              <li className='menu'>
                <Link to='/signin' onClick={() => props.postSignut()} >SignOut</Link>
            </li>
          </ul>
          </div>
        </div>  
  </nav>
</div>
  )
};

export default Navigation;