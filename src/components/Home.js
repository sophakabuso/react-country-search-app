import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.name.official.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className={styles.container}>
        <h2>Where on Earth?</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a country..."
        className={styles['search-input']}
      />
      {filteredCountries.length === 0 && (
        <p className={styles['no-results']}>No results found.</p>
      )}
      {filteredCountries.map((country) => (
        <div className={styles['country-card']} key={country.cca3}>
          <Link to={`/countries/${country.cca3}`}>
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className={styles['country-flag']}
            />
            <h2>{country.name.common}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
