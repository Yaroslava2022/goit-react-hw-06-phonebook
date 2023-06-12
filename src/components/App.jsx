
import { useState, useEffect } from "react";
import './App.module.css';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

   const filterHandler = (e) => {
    setFilter(e.target.value);
  };

 
  const formSubmitHandler = ({name, number})=> {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    
      const nameInContact = contact.name.toLowerCase().trim();
      const isInContact = contacts.find(
        (cont) => cont.name.toLowerCase().trim() === nameInContact
      );
      // console.log(contact.name);
      // console.log(isInContact);
      if (isInContact) {
        alert(`${contact.name} is already in contact`);
        return;
      }
      setContacts([contact, ...contacts]);
    };
  

  const deleteContact = (contactId) => {
  setContacts(contacts.filter((contact)=> contact.id !== contactId));
  };

  const getVisibleContact = () => {
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(normalizedFilter),
    );
  };
  
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={formSubmitHandler}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={filterHandler} />
        <ContactList
          contacts={getVisibleContact()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }