import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { GoPerson } from 'react-icons/go';
import { CiPhone } from 'react-icons/ci';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { addContact } from '../../redux/contacts/operations';
import { AddContactSchema } from '../../utils/schemas';

import styles from './ContactForm.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';

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
        <h3 className={styles.form_title}>Enter new contact details</h3>

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

        <StyledBtn type="submit" addClassName={styles.add_btn}>
          <AiOutlineUserAdd className={styles.add_ico} />
        </StyledBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
