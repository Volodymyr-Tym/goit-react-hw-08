import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactSchema } from '../../utils/schemas';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const INITIAL_VALUES = { name: '', number: '' };

  const dispatch = useDispatch();

  const onAddHandleSubmit = (values, actions) => {
    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(addContact(newContact));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onAddHandleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.label_title}>Name</span>

          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="John Smith"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label_title}>Number</span>

          <Field
            className={styles.input}
            type="text"
            name="number"
            placeholder="000-000-0000"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="number"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
