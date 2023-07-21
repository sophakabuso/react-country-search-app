import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CountryDetail.module.css';

const CountryDetail = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      const data = await response.json();
      setCountry(data[0]); // The response is an array, so we access the first item
    } catch (error) {
      console.error('Error fetching country details:', error);
    }
  };

  return (
    <div className={styles.container}>
      {country ? (
        <div className={styles['country-detail']}>
          {country.flags ? (
            <img
              src={country.flags.png}
              alt={`${country.name?.common || 'Country'} flag`}
              className={styles['country-flag']}
            />
          ) : (
            <p>No flag available</p>
          )}
          <h2>{country.name?.common || 'Country Name Not Available'}</h2>
          <p>Capital: {country.capital || 'N/A'}</p>
          <p>Region: {country.region || 'N/A'}</p>
          <p>Population: {country.population || 'N/A'}</p>
          <p>
            Languages:{' '}
            {country.languages
              ? Object.values(country.languages).join(', ')
              : 'N/A'}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetail;
