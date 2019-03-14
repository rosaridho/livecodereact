import React, { Component } from 'react';

import './styles/App.css';
import './styles/bootstrap.min.css';

import Footer from './components/footer.js';
import { connect } from 'unistore/react';
import { actions } from "./store.js";
import { withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class App extends Component {
  render(){
    if (!this.props.is_login){
        return <Redirect to = {{pathname : '/'}} />;
    } else {
        return (
      <div className="App">
        <header className="App-header">
        
        <div>
            <Footer/>
        </div>

        </header>
      </div>
    );
  }
}
}

export default connect(
  "is_login, email, full_name",
  actions
)(withRouter(App));

// export default App;
