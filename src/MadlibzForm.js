import React, { useState, useEffect, useRef } from 'react';
import './MadlibzForm.css';
import './Title.css';
import CompletedLib from './CompletedLib';

export default function MadlibzForm(props) {
  let wordsArr = useRef([]);

  let [word, setWord] = useState('');
  let [index, setIndex] = useState(0);
  let [type, setType] = useState(`${props.blanks[index]}`);
  let [showLib, setShowLib] = useState(false);
  let [subText, setSubText] = useState(true);

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
    setSubText(!subText);
  };

  return (
    <div>
      <div className="title-container">
        <div className="title-wrapper">
          <div className="title-box">
            <h2 className="title-header">MadLibz</h2>
            <p className="title-main">The game of middle school nostalgia</p>
            {subText && (
              <p className="title-subtext">
                Enter a word into the textbox below that grammaticaly aligns
                with the required word.
              </p>
            )}
          </div>
        </div>
      </div>
      {showLib === false ? (
        <div>
          {index !== props.blanks.length ? (
            <div className="form-container">
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
              <button
                className="button"
                type="button"
                onClick={() => clickHandler()}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="form-container">
              <button
                className="button"
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
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
