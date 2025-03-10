import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.style.backgroundColor = '#121212';
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.style.backgroundColor = '#fff';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.style.backgroundColor = '#121212';
      localStorage.setItem('theme', 'dark');
    }
  };

  return <ToggleButton onClick={toggleTheme}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</ToggleButton>;
};

export default ThemeToggle;
