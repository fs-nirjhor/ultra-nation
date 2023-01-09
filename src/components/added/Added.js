import React from 'react';

const Added = (props) => {
  const country = props.country ;
 const population = country.reduce((currentPopulation, country) => currentPopulation + country.population,0)
return (
  <div>
    <h3>Added Country: {country.length}</h3>
    <h3>Total Population: {population}</h3>
  </div>
);
};

export default Added;