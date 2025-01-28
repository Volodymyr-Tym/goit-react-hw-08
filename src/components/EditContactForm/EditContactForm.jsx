import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { GoPerson } from 'react-icons/go';
import { CiPhone } from 'react-icons/ci';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { addContact, updateContact } from '../../redux/contacts/operations';
import { AddContactSchema } from '../../utils/schemas';

import styles from './EditContactForm.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';

const EditContactForm = ({ contact }) => {
  const INITIAL_VALUES = {
    name: `${contact.name}`,
    number: `${contact.number}`,
  };

  const dispatch = useDispatch();

  const onEditHandleSubmit = values => {
    const updatedData = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(updateContact(contact.id, updatedData));
    console.log('ID=>', contact.id, 'UDATA=>', updatedData);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onEditHandleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <GoPerson className={styles.input_ico} />

          <div className={styles.input_wrap}>
            <Field
              className={styles.input}
              type="text"
              name="name"
              placeholder="Name"
            ></Field>
          </div>

          <div className={styles.tooltip_gap}>
            <ErrorMessage
              className={styles.message}
              name="name"
              component="span"
            />
          </div>
        </label>

        <label className={styles.label}>
          <CiPhone className={styles.input_ico} />

          <div className={styles.input_wrap}>
            <Field
              className={styles.input}
              type="text"
              name="number"
              placeholder="Phone number"
            ></Field>
          </div>

          <div className={styles.tooltip_gap}>
            <ErrorMessage
              className={styles.message}
              name="number"
              component="span"
            />
          </div>
        </label>

        <StyledBtn type="submit">Save changes</StyledBtn>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
