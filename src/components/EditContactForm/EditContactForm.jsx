import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';

import { GoPerson } from 'react-icons/go';
import { CiPhone } from 'react-icons/ci';

import StyledBtn from '../StyledBtn/StyledBtn';

import { updateContact } from '../../redux/contacts/operations';
import { AddContactSchema } from '../../utils/schemas';

import styles from './EditContactForm.module.css';

const EditContactForm = ({ contact, handleCloseModal }) => {
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

    dispatch(updateContact({ contactId: contact.id, updatedData })).unwrap(
      toast.success(`Data was updated`)
    );

    handleCloseModal();
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
              autoFocus={true}
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
