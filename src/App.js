import './App.css';
import MadlibzForm from './MadlibzForm';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  let blanks = useRef([]);
  let value = useRef([]);
  let title = useRef('');

  let fetchMadlibz = () => {
    console.log('hit');
    axios
      .get('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25')
      .then((res) => {
        blanks.current = res.data.blanks;
        value.current = res.data.value;
        title.current = res.data.title;
        console.log(blanks);
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      }, []);
  };

  useEffect(() => {
    fetchMadlibz();
  }, []);

  return (
    <div id="app-container">
      <h1>TEST</h1>
      <MadlibzForm blanks={blanks} />
    </div>
  );
}

export default App;
