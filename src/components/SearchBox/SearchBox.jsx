import { ImSearch } from 'react-icons/im';

import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = searchedValue => {
    dispatch(changeFilter(searchedValue));
  };

  return (
    <div>
      <label className={styles.label}>
        <span className={styles.label_title}>Find contacts by name</span>

        <input
          onChange={event => {
            handleChange(event.target.value);
          }}
          className={styles.input}
          type="text"
          value={filter}
          placeholder="Start typing..."
        />

        <ImSearch className={styles.ico} />
      </label>
    </div>
  );
};

export default SearchBox;
