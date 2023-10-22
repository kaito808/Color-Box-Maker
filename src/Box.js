import React from 'react';

const Box = ({ backgroundColor, width, height, index, removeBox }) => {
  return (
    <div style={{ backgroundColor, width, height }}>
      <button onClick={() => removeBox(index)}>X</button>
    </div>
  );
};

export default Box;
