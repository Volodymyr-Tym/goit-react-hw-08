import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { error, loading } from './redux/selectors';
import { fetchContacts } from './redux/contactsOps';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isError = useSelector(error);
  const isLoading = useSelector(loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <h1 className="h1_title">Phonebook</h1>

        <div className="wrapper">
          <ContactForm />
          <SearchBox />
        </div>
        {isError && <Error />}
        {isLoading && <Loader />}
        <ContactList />
      </Section>
    </>
  );
}

export default App;
