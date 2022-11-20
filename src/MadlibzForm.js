import React, { useState, useEffect, useRef } from 'react';

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
    console.log('wordsArr', wordsArr);
  };

  const renderLib = () => {
    setShowLib(!showLib);
  };

  /*
  - create an index variable to store the current
    index of the array being manipulated
  - when someone hits the button, we will push the current value of
    input field to the newWords array
  - increment index
  - do this in a while loop where index !== currentBlanks.length
  */

  console.log(props.blanks);
  console.log(wordsArr);
  return (
    <div>
      {showLib === false ? (
        <div>
          {index !== props.blanks.length ? (
            <div>
              <h1>Input the a word that fits the description!</h1>
              <h2>
                Word {index + 1} of {props.blanks.length}
              </h2>
              <h2>{type}</h2>

              <input
                type="text"
                value={word}
                onChange={(evt) => {
                  setWord(evt.target.value);
                }}
              ></input>
              <button type="button" onClick={() => clickHandler()}>
                Next Word
              </button>
            </div>
          ) : (
            <div>
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
              <CompletedLib />
              <button type="button" onClick={() => renderLib()}>
                Go Back
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
