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

  const fetchMadlibz = () => {
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
  };

  useEffect(() => {
    fetchMadlibz();
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div id="app-container">
      <h1>Madlibz</h1>
      <MadlibzForm blanks={blanksState} value={valueState} title={titleState} />
      <button type="button" onClick={() => refreshPage()}>
        Restart
      </button>
    </div>
  );
}

export default App;
