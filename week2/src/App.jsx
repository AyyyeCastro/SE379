import React, { useState, useEffect } from 'react';
// npm install bootstrap if this gives an error.
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
// it needed some basic CSS, my eyes were dying

// adding comment to test push + pull
// Another comment to test updating it.

// signUp form usestates and validations
const signUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [displayForm, setdisplayForm] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // some validation
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(firstName)) {
      setFirstNameError('First name should be alphabetical characters only.');
      return;
    } else {
      setFirstNameError('');
    }
    if (!regex.test(lastName)) {
      alert('Last name should be alphabetical characters only.');
      return;
    }

    // hide the form on submit
    setdisplayForm(false);
    clearForm();
  };

  // clear button function
  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setAge('');
  };

  // unmount DOM
  useEffect(() => {
    return () => {
      clearForm();
    }
  }, []);

  // toogle form
  const toggleForm = () => {
    setdisplayForm(!displayForm);
  };

  // first name live validation (not on submit, but onBlur (when clicked out of))
  const handleFirstNameBlur = () => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(firstName)) {
      setFirstNameError('First name should be alphabetical characters only.');
    } else { // empty error
      setFirstNameError('');
    }
  };

  return (
    <body>
      <div>
        <button onClick={toggleForm} className="btn btn-primary">{displayForm ? 'Hide Form' : 'Display Form'}</button>
        {displayForm && (

          <form onSubmit={handleSubmit}>
            <br></br>
            <div class="form-group">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={handleFirstNameBlur} required />
              {firstNameError && <div className="text-danger">{firstNameError}</div>}
            </div>
            <div class="form-group">
              <label className="form-label">Last Name</label>
                <input type="text" class="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            <div class="form-group">
              <label className="form-label">Email Address</label>
                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div class="form-group">
              <label className="form-label">Age</label>
                <input type="number" class="form-control" value={age} onChange={(e) => setAge(e.target.value)} required/>

            </div>
            
            <br></br>
            <div>
              <button type="submit" className="btn btn-secondary">Submit</button>
              <button type="button" onClick={clearForm} className="btn btn-warning">Clear</button>
            </div>
          </form>
        )}

      </div>
    </body>
  );
};

export default signUpForm;
