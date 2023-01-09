import React from 'react';

const Country = (props) => {
  const {name,area,region,population,flags} = props.country;
  const flagStyle = {width: "100px"}; 
  const countryStyle = {
    border: "2px ridge blue",
    margin: "10px",
    paddingBottom: "10px",
    backgroundColor: "lightcyan"
  };
  
return (
  <div style={countryStyle}>
    <h2>{name.common}</h2>
    <img src={flags.svg} style={flagStyle} alt="flag" />
    <p>Area: {area} km²</p>
    <p>Region: {region}</p>
    <p>Population: {population}</p>
    <button onClick={() => props.addButtonHandler(props.country)} >Add Country</button>
  </div>
);
};

export default Country;