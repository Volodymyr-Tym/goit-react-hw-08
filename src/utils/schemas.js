import * as Yup from 'yup';

const NumberRegex = /^\s*\d{3}-\d{3}-\d{4}\s*$/gm;

const EmailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

const PasswordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/gm;

export const AddContactSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be up to 50 characters'),

  number: Yup.string()
    .required('Number is required')
    .matches(NumberRegex, 'Required format: XXX-XXX-XXXX'),
});

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be up to 50 characters'),

  email: Yup.string()
    .trim()
    .required('Email is required')
    .matches(EmailRegex, 'Required format: example@gmail.com'),

  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 symbols')
    .max(16, 'Password must be up to 16 symbols')
    .matches(
      PasswordRegex,
      'Password must contain at least one digit, uppercase letter and one special character'
    ),
});
