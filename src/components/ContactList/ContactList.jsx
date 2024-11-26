import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/contacts/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length === 0 && <h3>There is on matches</h3>}

      <ul className={styles.user_list}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map(user => {
            return (
              <li className={styles.user_card} key={user.id}>
                <Contact user={user} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;
