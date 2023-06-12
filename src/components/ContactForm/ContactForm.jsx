import PropTypes from 'prop-types';

import { useState } from "react";

import css from './ContactForm.module.css';

const ContactForm =({onSubmit}) => {
  // state = { name: '', number: '' };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
   setName('');
   setNumber('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
    return (
      <form onSubmit={handleOnSubmit} className={css.form}>
        <label className={css.inputLabel}>
          <span className={css.label}> Name</span>
          <input
            onChange={nameHandler}
            type="name"
            // name="name"
            value={name}
            className={css.nameInput}
            required
          ></input>
        </label>
        <label className={css.inputLabel}>
          <span className={css.label}> Number</span>
          <input
            type="tel"
            // name="number"
            onChange={numberHandler}
            value={number}
            className={css.nameInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  
};
export { ContactForm };