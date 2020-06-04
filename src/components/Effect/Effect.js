import React, { useState, useEffect } from 'react';

export const Effect = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFacts = async () => {
    const res = await fetch('https://cat-fact.herokuapp.com/facts');
    const json = await res.json();
    setFacts(json.all);
    setLoading(!loading);
  };

  useEffect(() => {
    getFacts();
  });

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        facts.map((fact) => <p key={fact._id}>{fact.text}</p>)
      )}
    </div>
  );
};

export default Effect;
