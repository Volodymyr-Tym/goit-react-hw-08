import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { getContacts } from '../../redux/contacts/operations';

import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Phone book</h2>

      <div className={styles.operations}>
        <ContactForm />
        <SearchBox />
      </div>

      {Array.isArray(contacts) && contacts.length === 0 && (
        <h3>Your contact list is empty</h3>
      )}

      {Array.isArray(contacts) && contacts.length > 0 && <ContactList />}

      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
    </div>
  );
};

export default ContactsPage;
