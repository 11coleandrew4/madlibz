import React from 'react';

export default function CompletedLib(props) {
  let value = props.value;
  let title = props.title;
  let userWords = props.userWords;

  let madlib = '';
  let index = 0;

  while (index !== value.length - 1) {
    if (index !== userWords.length) {
      madlib += value[index];
      madlib += userWords[index];
    } else {
      madlib += value[index];
    }
    index++;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{madlib}</p>
    </div>
  );
}
