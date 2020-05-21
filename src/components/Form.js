import React from 'react';

import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Button from './Button';

import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const initialState = {
  name: {
    value: '',
    required: true
  },
  email: {
    value: '',
    required: true,
    requiredMessage: 'Email address is required!',
    email: true,
    emailMessage: 'Email address is not valid!'
  },
  password: {
    value: '',
    required: true,
    minLength: 6,
    minLengthMessage: 'Password must be at least 6 characters long!',
    maxLength: 16,
    maxLengthMessage: 'Too many characters!'
  },
  confirmPassword: {
    value: '',
    required: true,
    matchWith: 'password',
    matchWithMessage: 'Password values must be equal!'
  },
  gender: {
    value: '',
    required: true
  },
  difficulty: {
    value: '',
    required: true
  },
  image: {
    value: {},
    required: true,
    file: true,
    allowedTypes: ['jpg', 'jpeg', 'png', 'gif'],
    maxFileSize: 1024
  },
  description: {
    value: ''
  },
  terms: {
    value: false,
    required: true,
    requiredMessage: 'You need to accept our Terms and Conditions!'
  }
}

const Form = () => {
  const { formData, errors, changeHandler, setErrors } = useForm(initialState, validate);

  const submitHandler = (e) => {
    e.preventDefault();
    let formErrors = validate(formData, true);
    setErrors(formErrors);

    if(Object.keys(formErrors).length === 0) {
      const data = new FormData();
      data.append('name', formData.name.value);
      data.append('email', formData.email.value);
      data.append('password', formData.password.value);
      data.append('gender', formData.gender.value);
      data.append('difficulty', formData.difficulty.value);
      data.append('image', formData.image.value);
      data.append('description', formData.description.value);
      data.append('terms', formData.terms.value);

      console.log('form can be submitted now...');
      for(let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
  }

  return(
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <Input 
          label="Full Name"
          name="name"
          id="name"
          value={formData.name.value}
          onChange={changeHandler}
          error={errors.name}
        />
        <Input 
          label="Email"
          name="email"
          id="email"
          value={formData.email.value}
          onChange={changeHandler}
          error={errors.email}
        />
        <Input 
          type="password"
          label="Password"
          name="password"
          id="password"
          value={formData.password.value}
          onChange={changeHandler}
          error={errors.password}
        />
        <Input 
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword.value}
          onChange={changeHandler}
          error={errors.confirmPassword}
        />
        <Radio 
          label="Gender"
          name="gender"
          onChange={changeHandler}
          choices={[
            { id: 'female', label: 'Female', value: 'female' },
            { id: 'male', label: 'Male', value: 'male' }
          ]}
          error={errors.gender}
        />
        <Select 
          label="Difficulty"
          name="difficulty"
          id="difficulty"
          options={[
            { label: 'Please select a difficulty', value: '' },
            { label: 'Easy', value: 'easy' },
            { label: 'Medium', value: 'medium' },
            { label: 'Hard', value: 'hard' }
          ]}
          value={formData.difficulty.value}
          onChange={changeHandler}
          error={errors.difficulty}
        />
        <Input 
          type="file"
          label="Image"
          name="image"
          id="image"
          onChange={changeHandler}
          error={errors.image}
        />
        <Textarea 
          id="description"
          name="description"
          label="Description"
          value={formData.description.value}
          onChange={changeHandler}
        />
        <Checkbox 
          label="Terms and conditions"
          id="terms"
          name="terms"
          value={formData.terms.value}
          onChange={changeHandler}
          error={errors.terms}
        />
        <Button type="submit" title="Submit" />
      </form>
    </div>
  );
}

export default Form;