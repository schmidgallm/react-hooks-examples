import React from 'react';
import './Landing.css';

const Landing = () => (
  <div className='wrapper'>
    <div className='container jumbotron my-3 bg-success text-white'>
      <h1>Fun with React Hooks</h1>
      <p>Working examples of useState, useEffect, and custom hooks</p>
    </div>
    <div className='container section-container text-center'>
      <div className='section'>
        <h2>useState</h2>
        <p>
          The useState hooks replaces the need to declare state inside
          constructor and declare state as variable.
        </p>
        <a href='/state' className='btn btn-primary'>
          See Example
        </a>
      </div>
      <div className='section'>
        <h2>useEffect</h2>
        <p>
          The Effect Hook lets you perform side effects in function components.
          Replaces the need to call methods such as component did mount and
          update.
        </p>
        <a href='/effect' className='btn btn-primary'>
          See Example
        </a>
      </div>
    </div>
  </div>
);
export default Landing;

/*

*/
