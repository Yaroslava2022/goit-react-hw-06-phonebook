import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts);


const filter = useSelector(state => state.filter);

const getVisibleContact = () => {
  const normalizedFilter = filter.toLowerCase();
  console.log(contacts);
  if (!contacts) {
    return;
  }
  return contacts.filter((contact) =>
    contact.name.toString().toLowerCase().includes(normalizedFilter)
  );
};

const visibleContacts = getVisibleContact();

return (
  <ul className={css.list}>
    {visibleContacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={css.item}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      );
    })}
  </ul>
);
};
ContactList.propTypes = {
contacts: PropTypes.arrayOf(PropTypes.object),
onDeleteContact: PropTypes.func,
};
export { ContactList };