import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { GoPerson } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import { SlLock } from 'react-icons/sl';

import StyledBtn from '../StyledBtn/StyledBtn';

import { register } from '../../redux/auth/operations';
import { RegisterUserSchema } from '../../utils/schemas';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const INITIAL_VALUES = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const onRegisterHandleSubmit = (values, actions) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(formData));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onRegisterHandleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={styles.form}>
        <h3 className={styles.form_title}>
          Please fill form fields to create an account.
        </h3>

        <label className={styles.label}>
          <GoPerson className={styles.input_ico} />

          <div className={styles.input_wrap}>
            <Field
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter your name"
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
          <IoMailOutline className={styles.input_ico} />

          <div className={styles.input_wrap}>
            <Field
              className={styles.input}
              type="text"
              name="email"
              placeholder="Enter your email"
            ></Field>
          </div>

          <div className={styles.tooltip_gap}>
            <ErrorMessage
              className={styles.message}
              name="email"
              component="span"
            />
          </div>
        </label>

        <label className={styles.label}>
          <SlLock className={styles.input_ico} />

          <div className={styles.input_wrap}>
            <Field
              className={styles.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            ></Field>
          </div>

          <div className={styles.tooltip_gap}>
            <ErrorMessage
              className={`${styles.message} ${styles.pwd_message}`}
              name="password"
              component="span"
            />
            <div className={styles.tooltip}>
              <ul>
                {' '}
                <p>Password must contain:</p>
                <li>~ lower case letter (a-z)</li>
                <li>~ upper case letter (A-Z)</li>
                <li>~ digit (0-9)</li>
                <li>~ special character (!@#$%^&*)</li>
              </ul>
            </div>
          </div>
        </label>

        <StyledBtn type="submit">Sign up</StyledBtn>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
