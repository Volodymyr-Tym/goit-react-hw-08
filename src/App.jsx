// !
// ?  NEW
//    MY OLD
// !

// import Section from './components/Section/Section';
// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
// import Loader from './components/Loader/Loader';
// import Error from './components/Error/Error';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { error, loading } from './redux/selectors';
// import { fetchContacts } from './redux/contactsOps';

import './App.css';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  //? const isRefreshing = useSelector(selectIsRefreshing);

  //? useEffect(() => {
  //?   dispatch(refreshUser());
  //? }, [dispatch]);

  // const isError = useSelector(error);
  // const isLoading = useSelector(loading);

  //? useEffect(() => {
  //?   dispatch(fetchContacts());
  //? }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            //? <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
            <RegistrationPage />
          }
        />
        <Route
          path="/login"
          element={
            //? <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            <LoginPage />
          }
        />
        <Route
          path="/contacts"
          element={
            //? <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            <ContactsPage />
          }
        />
      </Routes>
    </Layout>
  );

  // return (
  //   <>
  //     <Section>
  //       <h1 className="h1_title">Phonebook</h1>

  //       <div className="wrapper">
  //         <ContactForm />
  //         <SearchBox />
  //       </div>
  //       {isError && <Error />}
  //       {isLoading && <Loader />}
  //       <ContactList />
  //     </Section>
  //   </>
  // );
}

export default App;
