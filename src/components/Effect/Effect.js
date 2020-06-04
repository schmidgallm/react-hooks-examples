import React, { useState, useEffect } from 'react';

export const Effect = () => {
  const [facts, setFacts] = useState([]);

  // this effect only runs once at time of mount as we pass an empty array argument
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // this effect will run every time the facts state we pass as argument changes
  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => response.json())
      .then((json) => setFacts(json.all));
  }, [facts]);

  return (
    <div>
      {facts.map((fact) => (
        <p key={fact._id}>{fact.text}</p>
      ))}
    </div>
  );
};

export default Effect;
