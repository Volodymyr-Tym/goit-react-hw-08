import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoMailOutline } from 'react-icons/io5';
import { SlLock } from 'react-icons/sl';

import { login } from '../../redux/auth/operations';
import { LoginUserSchema } from '../../utils/schemas';

import styles from './LoginForm.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';

const LoginForm = () => {
  const INITIAL_VALUES = { email: '', password: '' };

  const dispatch = useDispatch();

  const onLoginHandleSubmit = (values, actions) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(userData));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onLoginHandleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form className={styles.form}>
        <h3 className={styles.form_title}>
          Please enter your details to log in to your account.
        </h3>

        <label className={styles.label}>
          <IoMailOutline className={styles.input_ico} />

          <div className={styles.input_wrap}>
            <Field
              className={styles.input}
              type="text"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
            ></Field>
          </div>

          <div className={styles.tooltip_gap}>
            <ErrorMessage
              className={`${styles.message} ${styles.pwd_message}`}
              name="password"
              component="span"
            />
          </div>
        </label>

        <StyledBtn type="submit">Sign in</StyledBtn>
      </Form>
    </Formik>
  );
};

export default LoginForm;
