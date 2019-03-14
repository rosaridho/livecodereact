import React, { Component } from 'react';
import axios from 'axios';

import '../styles/App.css';
import Details from './detail.js';

const myReqUrl = "https://api-todofancy.herokuapp.com/api/movies"

class Fiction extends Component {
    constructor(props){
      super(props);
      this.state={
        listNews : [],
        username : "",
        isLogin : false,

      }
    }
    
    componentDidMount = () => {
      // this.props.showArticle()
      const self = this;
  
      axios
      .get(myReqUrl)
      .then(function(response){
   
        var allData = (response.data.movies).filter(allData => allData.Category === "fiction");
        self.setState({listNews: allData})
        console.log(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
    }

    render() {
        const {listNews, username, islogin} = this.state;
        return (
          <div>    
    
          <div className="album background" id="level-0">
            <div className="headerCart">
              <div className="col-md-6 col-sm-12 offset-md-0">
                <div className="flex-container">
                  {listNews.map((item, key) => {
                    return <Details key={key} title={item.Title} year={item.Year} category={item.Category} poster={item.Poster} synopsis={item.Synopsis} />
                  })}
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      }
    }  
export default Fiction;