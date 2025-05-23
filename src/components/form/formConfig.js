import * as Yup from 'yup';

export const registrationInitialValues = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
};

export const familyInitialValues = {
  firstName: '',
  lastName: '',
  height: '',
  age: '',
  trust: false
};

export const registrationFields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

export const familyFields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'height', label: 'Height (cm)', type: 'number' },
  { name: 'age', label: 'Age', type: 'number' },
  { name: 'trust', label: 'Trust', type: 'checkbox' },
];

export const familyValidationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  height: Yup.number().positive('Must be positive').required('Required'),
  age: Yup.number().integer('Must be a whole number').positive().required('Required'),
  trust: Yup.boolean().oneOf([true], 'You must accept the Trust condition').required('Required'),
});


export const registrationValidationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Required'),
});
