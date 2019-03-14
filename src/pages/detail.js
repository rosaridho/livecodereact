import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../styles/App.css';


const Details = props => {
  return (
    <div>
      <div id="kotak1">
        <img src={props.poster} style={{width:"20%", float:"left",paddingRight: "0px"}}/>
      </div>
      <div id="kotak2head"> 
      <h2 style={{fontWeight: "bold"}}>{props.title}</h2>
      </div>
      <div id="kotak2head"> 
      <h2 style={{fontWeight: "bold"}}>{props.year}</h2>
      </div>
      <div id="kotak2">
          <p>{props.synopsis}</p>
      </div>
      <br></br>
    </div>
  )
}


export default Details;