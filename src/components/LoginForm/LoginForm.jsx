import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { login } from '../../redux/auth/operations';
import { LoginUserSchema } from '../../utils/schemas';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const INITIAL_VALUES = { email: '', password: '' };

  const dispatch = useDispatch();

  const onLoginHandleSubmit = (values, actions) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(userData));
    console.log('userData->', userData);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onLoginHandleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.label_title}>Email</span>

          <Field
            className={styles.input}
            type="text"
            name="email"
            placeholder="Enter your email"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="email"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label_title}>Password</span>

          <Field
            className={styles.input}
            type="password"
            name="password"
            placeholder="Enter your password"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="password"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Sign in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
