import './App.css';
import MadlibzForm from './MadlibzForm';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  let [blanksState, setBlanksState] = useState([]);
  let [valueState, setValueState] = useState([]);
  let [titleState, setTitleState] = useState('');

  let blanks = useRef([]);
  let value = useRef([]);
  let title = useRef('');

  useEffect(() => {
    axios
      .get('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25')
      .then((res) => {
        blanks.current = res.data.blanks;
        value.current = res.data.value;
        title.current = res.data.title;
        setBlanksState(blanks.current);
        setValueState(value.current);
        setTitleState(title.current);
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      }, []);
  }, []);

  return (
    <div id="app-container">
      <h1>TEST</h1>
      <MadlibzForm blanks={blanksState} />
    </div>
  );
}

export default App;
