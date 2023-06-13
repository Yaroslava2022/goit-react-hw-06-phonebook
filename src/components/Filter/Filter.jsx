import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from "react-redux";
import { filterContact } from 'redux/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    console.log(e.target.value);
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <label className={css.inputLabel}>
        <span className={css.label}>Find contacts by name</span>
        <input
          onChange={filterHandler}
          type="text"
          name="filter"
          // value={value}
          className={css.filterInput}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { Filter };