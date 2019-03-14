import React, { Component } from 'react';
import MainRoute from './routes/MainRoute.js';
import { withRouter } from "react-router-dom";

import './styles/App.css';

import Navigation from './components/Navigation.js';

class AppAjax extends Component {
    postSignout = () => {
        localStorage.removeItem('is_login');
        // localStorage.clear();
        this.props.history.push('/');
    };
    render(){
        return (
            <div className="App">
            <Navigation postSignout={this.postSignout} />
            <MainRoute />
            </div>
        )
    }
}

export default withRouter(AppAjax);