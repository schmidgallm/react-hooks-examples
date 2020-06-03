import React, { useState, Fragment } from 'react';
import './State.css';

const State = () => {
  // init form state hook
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  // init message state hook
  const [message, setMessage] = useState({
    msg: '',
  });

  //   Notice above you can declare multiple state values using hooks

  // destructure state into easier managable variables
  const { first_name, last_name, email } = formData;
  const { msg } = message;

  // on change handler
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = async (e) => {
    // prevent form from submitting
    e.preventDefault();

    // submit form and perform api call or business logic here
    console.log(formData);

    // set message
    setMessage({
      msg: `Hi ${first_name}! Form succesfully submitted using hooks...`,
    });

    // clear all state values back to original values
    clearState();
  };

  // set message and timeout message and clear form
  const clearState = () => {
    setTimeout(() => {
      setMessage({ msg: '' });
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
      });
    }, 3000);
  };

  return (
    <Fragment>
      <div className='container my-5 form'>
        {msg ? <h3 className='text-primary'>{msg}</h3> : null}
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='first_name'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='first_name'
              aria-describedby='name'
              name='first_name'
              value={first_name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='last_name'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='last_name'
              aria-describedby='name'
              name='last_name'
              value={last_name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type='submit' className='btn btn-warning'>
            Submit
          </button>
        </form>
        <h4>
          See the code{' '}
          <a
            href='https://github.com/schmidgallm/react-hooks-examples'
            target='_blank'
            rel='noopener noreferrer'
          >
            Here
          </a>
        </h4>
      </div>
    </Fragment>
  );
};

export default State;
