
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from "../store.js";
import { withRouter} from 'react-router-dom';


class Profile extends Component{
    render(){
    if (!this.props.is_login){
        return <Redirect to = {{pathname : '/signin'}} />;
    } else {
        return (
            
            <section className='content'>
            <h1 style={{textAlign:"center"}}>Profile</h1>
             <div id="kotak1">
                <img src={this.props.avatar} style={{width:"10%"}}/>
            </div>
           
            <div id="kotak2head">
                <h2>{this.props.username}</h2>
            </div>

            <div id="kotak2"> 
            <h5 style={{fontWeight: "bold"}}>{this.props.email}</h5>
            </div>
            
            </section>
        );
    }
}
};

export default connect(
    "is_login, email, username, avatar",
    actions
)(withRouter(Profile));