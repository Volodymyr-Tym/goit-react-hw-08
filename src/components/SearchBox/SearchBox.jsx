import { useDispatch, useSelector } from 'react-redux';
import { ImSearch } from 'react-icons/im';

import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/contacts/selectors';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = searchedValue => {
    dispatch(changeFilter(searchedValue));
  };

  return (
    <div className={styles.search_wrap}>
      <h3 className={styles.search_title}>Find contacts by name or number</h3>

      <label className={styles.label}>
        <ImSearch className={styles.input_ico} />

        <div className={styles.input_wrap}>
          <input
            onChange={event => {
              handleChange(event.target.value);
            }}
            className={styles.input}
            type="text"
            value={filter}
            placeholder="Start typing..."
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBox;
