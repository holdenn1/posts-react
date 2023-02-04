import * as yup from 'yup';

export default [
  yup.object().shape({
    email: yup.string().required('Email is required field').email('Invalid email address'),
    password: yup.string().required('Password is required field').min(6, 'Password must contain at least six characters').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, 'Password must contain a letter, a number and one special character')
  }),
  yup.object().shape({
    name: yup.string().required('Name is required field').min(1, 'Name must have at least one character'),
    gender: yup.string().required('Gender is required field'),
  }),
  yup.object().shape({
    birthDate: yup.string().required('Please indicate your birthday'),
  }),
  yup.object().shape({
    country: yup.string().required('This field is required'),
  }),
  yup.object().shape({
    hobby: yup.array().required('Hobby is required field').min(3, 'Choose at least 3 hobbies'),
  }),
  yup.object().shape({
    file: yup.string().required('Avatar is required field')
  })
]



