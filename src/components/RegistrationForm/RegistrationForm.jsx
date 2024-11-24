import { useDispatch } from 'react-redux';
import styles from './RegistrationForm.module.css';
import { apiRegister } from '../../redux/auth/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RegisterUserSchema } from '../../utils/schemas';

const RegistrationForm = () => {
  const INITIAL_VALUES = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const onRegisterHandleSubmit = (values, actions) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    // dispatch(apiRegister(formData));
    console.log('formData->', formData);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onRegisterHandleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.label_title}>Name</span>

          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter your name"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="name"
            component="span"
          />
        </label>

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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
