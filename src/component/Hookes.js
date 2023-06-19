import React, { useState } from 'react';

function Hookes() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(2);

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count * 2)}>
        <h3>Click me</h3>
      </button>
    </div>
  );
}
export default Hookes;