import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUserAdd } from 'react-icons/ai';

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
import StyledBtn from '../../components/StyledBtn/StyledBtn';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onNewContactHandleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className={styles.contacts_container}>
      <h2 className={styles.title}>Contacts</h2>

      <div className={styles.operations}>
        <StyledBtn big onClick={onNewContactHandleClick}>
          New contact
          <AiOutlineUserAdd className={styles.add_ico} />
        </StyledBtn>

        <div className={`${styles.modal_wrap} ${isOpen ? styles.open : ''}`}>
          <div className={styles.modal}>
            <ContactForm />
          </div>
        </div>

        <SearchBox />
      </div>

      {Array.isArray(contacts) && contacts.length === 0 && (
        <h3>Your contact list is empty</h3>
      )}

      {Array.isArray(contacts) && contacts.length > 0 && <ContactList />}

      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
    </Container>
  );
};

export default ContactsPage;
