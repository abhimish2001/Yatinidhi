import React, { useState, useEffect } from "react";

export const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    // Find the number of increments
    const increments = end - start;
    const incrementTime = duration / increments;

    const timer = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount < end) {
          return currentCount + 1;
        } else {
          clearInterval(timer);
          return currentCount;
        }
      });
    }, incrementTime);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <h2>{count}</h2>;
};
