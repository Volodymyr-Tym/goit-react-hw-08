import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleDown } from 'react-icons/fa6';

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
import Container from '../../components/Container/Container';
// import StyledBtn from '../../components/StyledBtn/StyledBtn';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isFindOpen, setIsFindOpen] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onAddHandleClick = () => {
    setIsAddOpen(!isAddOpen);
  };

  const onFindHandleClick = () => {
    setIsFindOpen(!isFindOpen);
  };

  return (
    <Container className={styles.contacts_container}>
      <div className={styles.section}>
        <h2 className={styles.title}>Contacts</h2>

        <div className={styles.acc_wrap}>
          <button
            className={`${styles.acc_btn} ${isAddOpen ? styles.opened : ''}`}
            type="button"
            onClick={onAddHandleClick}
          >
            Add contact
            <FaAngleDown className={styles.acc_btn_ico} />
          </button>

          <div className={`${styles.acc} ${isAddOpen ? styles.opened : ''}`}>
            <div className={styles.acc_item}>
              <ContactForm />
            </div>
          </div>

          <button
            className={`${styles.acc_btn} ${isFindOpen ? styles.opened : ''}`}
            type="button"
            onClick={onFindHandleClick}
          >
            Find contact
            <FaAngleDown className={styles.acc_btn_ico} />
          </button>

          <div className={`${styles.acc} ${isFindOpen ? styles.opened : ''}`}>
            <div className={styles.acc_item}>
              <SearchBox />
            </div>
          </div>
        </div>

        <div className={styles.list_wrap}>
          {Array.isArray(contacts) && contacts.length === 0 && (
            <h3 className={styles.no_contacts}>Your contact list is empty</h3>
          )}

          {Array.isArray(contacts) && contacts.length > 0 && <ContactList />}
        </div>

        {isLoading && <Loader />}
        {isError && <Error error={isError} />}
      </div>
    </Container>
  );
};

export default ContactsPage;
