import React from 'react';
import './Landing.css';

const Landing = () => (
  <div className='wrapper'>
    <div className='container jumbotron my-5 bg-success text-white'>
      <h1>Fun with React Hooks</h1>
      <p>Working examples of useState, useEffect, and custom hooks</p>
    </div>
    <div className='container text-center'>
      <div className='row'>
        <div className='col-lg-6 col-sm-12 section'>
          <h2>useState</h2>
          <a href='/state' className='btn btn-primary'>
            See Example
          </a>
        </div>
        <div className='col-lg-6 col-sm-12 section'>
          <h2>useEffect</h2>
          <a href='/effect' className='btn btn-primary'>
            See Example
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Landing;

/*

*/
