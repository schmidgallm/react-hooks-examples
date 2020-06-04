import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className='wrapper bg-primary text-white'>
    <div className='sections'>
      <div className='header'>
        <h1>React Hooks Practical Examples</h1>
        <p className='lead'>Working examples of useState and useEffect</p>
      </div>
      <div className='links'>
        <Link className='btn btn-outline-warning' to='/state'>
          Use State
        </Link>
        <Link className='btn btn-outline-warning' to='/effect'>
          Use Effect
        </Link>
      </div>
    </div>
  </div>
);
export default Landing;

/*

*/
