import React from 'react';

export default function CompletedLib(props) {
  let value = props.value;
  let title = props.title;
  let userWords = props.userWords;
  let index = 0;
  let madlibArr = [];

  while (index !== value.length - 1) {
    if (index !== userWords.length) {
      madlibArr.push(value[index]);

      madlibArr.push(userWords[index]);
    } else {
      madlibArr.push(value[index]);
    }
    index++;
  }

  return (
    <div>
      <h1>{title}</h1>

      <p>
        {madlibArr.map((elem, idx) => {
          if (idx % 2 === 0) {
            return <span key={idx}>{elem}</span>;
          } else {
            return (
              <span key={idx} style={{ fontWeight: 'bold' }}>
                {elem}
              </span>
            );
          }
        })}
      </p>
    </div>
  );
}
