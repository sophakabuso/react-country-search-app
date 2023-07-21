import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div>
      <Link to={`/countries/${country.cca3}`}>
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          style={{ width: '100px' }}
        />
        <h2>{country.name.common}</h2>
      </Link>
    </div>
  );
};

export default CountryCard;
