import React, { useState, useEffect } from 'react';

import styles from './Home.module.css';
import CountryCard from './CountryCard'; // Import the modified CountryCard component

import earthCountries from '../assets/images/earthCountries.jpg';

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
      <div className={styles.appHeader}>
        <img src={earthCountries} alt="Countries-app Logo" />
        <h2>Where on Earth?</h2>
      </div>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
          className={styles.searchInput}
        />
      </div>
      {filteredCountries.length === 0 && (
        <p className={styles.noResults}>No results found.</p>
      )}
      <div className={styles.countryCardsContainer}>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
