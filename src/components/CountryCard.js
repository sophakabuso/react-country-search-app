import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';

const CountryCard = ({ country }) => {
  return (
    <div className={styles.countryCard}>
      <Link to={`/countries/${country.cca3}`}>
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className={styles.countryFlag}
        />
        <h2>{country.name.common}</h2>
      </Link>
      <div className={styles.countryInfo}>
        <p>Capital: {country.capital || 'N/A'}</p>
        <p>Region: {country.region || 'N/A'}</p>
        <p>Population: {country.population || 'N/A'}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CountryCard;
