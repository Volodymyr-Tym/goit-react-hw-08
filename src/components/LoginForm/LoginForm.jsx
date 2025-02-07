import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

import { IoMailOutline } from 'react-icons/io5';
import { SlLock } from 'react-icons/sl';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import StyledBtn from '../StyledBtn/StyledBtn';
import Error from '../Error/Error';

import { login } from '../../redux/auth/operations';
import { LoginUserSchema } from '../../utils/schemas';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const INITIAL_VALUES = { email: '', password: '' };

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onLoginHandleSubmit = (values, actions) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(userData))
      .unwrap()
      .catch(errMsg => {
        if (errMsg === 'Request failed with status code 400')
          toast.custom(
            <Error error={'This user has not been registered yet.'} login />
          );
        else toast.custom(<Error error={errMsg} />);
      });

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
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
            ></Field>

            <button
              type="button"
              className={styles.show_password_btn}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className={styles.eye_ico} />
              ) : (
                <AiOutlineEye className={styles.eye_ico} />
              )}
            </button>
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
