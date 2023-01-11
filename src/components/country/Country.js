import React from 'react';
import "./Country.css";
import Member from "../member/Member";
import { useState } from "react";

const Country = (props) => {
  const {name,area,region,population,flags} = props.country;
  
  const show = {display:'inline'};
  const hide = {display:'none'};
  const [hideStyle, sethideStyle] = useState(hide);
  const [showStyle, setShowStyle] = useState(show);
  const showButtonHandler = () => {
    sethideStyle(show);
    setShowStyle(hide);
  };
  const hideButtonHandler = () => {
    sethideStyle(hide);
    setShowStyle(show);
  };
return (
  <div className="country">
    <h2>{name.common}</h2>
    <img src={flags.svg} alt="flag" />
    <p>Area: {area} km²</p>
    <p>Region: {region}</p>
    <p>Population: {population}</p>
    <button onClick={() => props.addButtonHandler(props.country)} >Add Country</button> 
    <button style={showStyle} onClick={showButtonHandler}>Show Members</button>
    <button style={hideStyle} onClick={hideButtonHandler}>Hide Members</button>
    <Member memberStyle={hideStyle}></Member>
  </div>
);
};

export default Country;