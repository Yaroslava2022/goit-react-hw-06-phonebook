import PropTypes from 'prop-types';
import { addContacts } from 'redux/contactsSlice';
import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

import css from './ContactForm.module.css';

const ContactForm =() => {
  // state = { name: '', number: '' };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector((state) => {
    return state.contacts;
  });
  const dispatch = useDispatch();

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
    const nameInContact = name.toLowerCase().trim();
    const isInContact = contacts.find(
      (cont) => cont.name.toLowerCase().trim() === nameInContact
    );
    if (isInContact) {
      alert(`${name} is already in contact`);
      return;
    }
    dispatch(addContacts({ name, number }));

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
  onSubmit: PropTypes.func,
  
};
export { ContactForm };