import React from 'react';
import Subject from './Subject';

function Course(props) {
  return (
    <div>
      <Subject name="Math" difficulty={3} />
      <Subject name="Science" difficulty={5} />
    </div>
  );
}

export default Course;