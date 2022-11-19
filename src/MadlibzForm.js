import React, { useState, useEffect, useRef } from 'react';

export default function MadlibzForm(props) {
  let index = 0;
  let [word, setWord] = useState('');
  let [wordType, setWordType] = useState(props.blanks.current[index]);

  console.log(props);
  // let currentBlanks = props.blanks.current;
  let currentBlanksObj = useRef([]);
  useEffect(() => {
    currentBlanksObj.current = props.blanks.current;
  });

  let currentBlanks = currentBlanksObj.current;
  console.log('sdfasdfsdfasdf', currentBlanks);

  let newWords = [];

  /*
  - create an index variable to store the current
    index of the array being manipulated
  - when someone hits the button, we will push the current value of
    input field to the newWords array
  - increment index
  - do this in a while loop where index !== currentBlanks.length
  */

  const clickHandler = (word) => {
    if (index !== currentBlanks.length) {
      newWords.push(word);
      setWord('');
      index++;
      setWordType();
    }
    console.log('new words', newWords);
  };

  return (
    <div>
      <h1>{wordType}</h1>

      <input
        type="text"
        value={word}
        onChange={(evt) => {
          setWord(evt.target.value);
          console.log('word', word);
        }}
      ></input>
      <button type="button" onClick={() => clickHandler(word)}>
        Next Word
      </button>
    </div>
  );
}
