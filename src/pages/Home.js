import React, { Component } from 'react';
import { connect } from 'unistore/react';
import { actions } from "../store.js";
import { withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import romance from '../images/romance.jpg';
import action from '../images/action.jpg';
import fiction from '../images/fiction.jpg';
import comedy from '../images/comedy.jpg';

import '../styles/App.css';

class Home extends Component {
    render(){
        if (!this.props.is_login){
            return <Redirect to = {{pathname : '/signin'}} />;
        } else {
            return (
                <div class="container">
                <div class="row">
                <div class="col-md-3 col-sm-12 offset-md-0">
                    <div class="card" style={{width:"75%"}}>
                        <a href="./romance">
                            <img class="card-img-top" src={romance} alt="Card image" style={{width:"100%"}}/>
                        </a>
                       
                        <div class="card-body" style={{marginTop:"10px"}}>
                            <a href="./romance" class="btn btn-primary stretched-link" style={{marginLeft: "5%"}}>See
                                Movies</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 offset-md-0">
                    <div class="card" style={{width:"75%"}}>
                        <a href="./action">
                            <img class="card-img-top" src={action} alt="Card image" style={{width:"100%"}}/>
                        </a>
                        <div class="card-body" style={{marginTop:"10px"}}>
    
                            <a href="./action" class="btn btn-primary stretched-link" style={{marginLeft: "5%"}}>See
                                Movies</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 offset-md-0">
                    <div class="card" style={{width:"75%"}}>
                        <a href="./fiction">
                            <img class="card-img-top" src={fiction} alt="Card image" style={{width:"100%"}}/>
                        </a>
                        <div class="card-body" style={{marginTop:"10px"}}>
                            <a href="./fiction" class="btn btn-primary stretched-link" style={{marginLeft: "5%"}}>See
                                Movies</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 offset-md-0">
                    <div class="card" style={{width:"75%"}}>
                        <a href="./comedy">
                            <img class="card-img-top" src={comedy} alt="Card image" style={{width:"100%"}}/>
                        </a>
                        <div class="card-body" style={{marginTop:"10px"}} >
                            <a href="./comedy" class="btn btn-primary stretched-link" style={{marginLeft: "5%"}}>See
                                Movies</a>
                        </div>
                    </div>
                </div>

             
                </div>
                </div>
            

    );
  }
}
}

export default connect(
    "is_login, email, full_name",
    actions
)(withRouter(Home));

// export default Home;