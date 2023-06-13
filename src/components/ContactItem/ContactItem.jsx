import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from "react-redux";
import { deleteContacts } from 'redux/contactsSlice';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };
  return (
    <div className={css.contactItem}>
      <p className={css.contactName}> {`${name}:`}</p>{' '}
      <p className={css.contactNumber}> {number}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export { ContactItem };