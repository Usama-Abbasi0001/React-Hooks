import React, { useState, useEffect } from 'react';

function UseEffects() {
  const [count, setCount] = useState(0);

  // useEffect to log the count whenever it changes
  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, [count]); // Dependency array ensures this runs only when `count` changes

  return (
    <div className="flex flex-col items-center space-y-6 mt-10">
      <p className="text-lg font-bold">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="border px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="border px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseEffects;
