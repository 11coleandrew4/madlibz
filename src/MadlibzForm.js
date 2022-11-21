import React, { useState, useEffect, useRef } from 'react';
import './MadlibzForm.css';
import CompletedLib from './CompletedLib';

export default function MadlibzForm(props) {
  let wordsArr = useRef([]);

  let [word, setWord] = useState('');
  let [index, setIndex] = useState(0);
  let [type, setType] = useState(`${props.blanks[index]}`);
  let [showLib, setShowLib] = useState(false);

  useEffect(() => {
    setType(props.blanks[index]);
  });

  const clickHandler = () => {
    setIndex(index + 1);
    setType(props.blanks[index]);
    wordsArr.current.push(word);
    setWord('');
  };

  const renderLib = () => {
    setShowLib(!showLib);
  };

  return (
    <div>
      {showLib === false ? (
        <div>
          {index !== props.blanks.length ? (
            <div className="form-container">
              <h1>Input the a word that fits the description!</h1>
              <h2>
                Word {index + 1} of {props.blanks.length}
              </h2>
              <h2>{type}</h2>

              <input
                type="text"
                className="text-field"
                value={word}
                onChange={(evt) => {
                  setWord(evt.target.value);
                }}
              ></input>
              <button type="button" onClick={() => clickHandler()}>
                Next
              </button>
            </div>
          ) : (
            <div className="form-container">
              <button
                type="button"
                onClick={() => {
                  renderLib();
                }}
              >
                See Madlib!
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {index === props.blanks.length && showLib === true ? (
            <div>
              <CompletedLib
                value={props.value}
                title={props.title}
                userWords={wordsArr.current}
              />
              <h2>Refresh Page To Do Another One!</h2>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
