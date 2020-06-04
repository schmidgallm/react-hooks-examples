import React from 'react';
import './Landing.css';

const Landing = () => (
  <div className='wrapper bg-primary text-white'>
    <div className='sections'>
      <div className='header'>
        <h1>Fun with React Hooks</h1>
        <p>Working examples of useState, useEffect, and custom hooks</p>
      </div>
      <div className='links'>
        <a className='btn btn-outline-warning' href='/state'>
          Use State
        </a>
        <a className='btn btn-outline-warning' href='/effect'>
          Use Effect
        </a>
      </div>
    </div>
  </div>
);
export default Landing;

/*

*/
