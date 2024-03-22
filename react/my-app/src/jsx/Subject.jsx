import React from 'react';

function Subject(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Difficulty: {props.difficulty}</h2>
    </div>
  );
}

export default Subject;