import "./signup_form.styles.scss";
import { useState } from "react";
import AuthenticationService from "../../../../services/authentication";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthenticationService.register(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className='sign-up-form' onSubmit={handleOnSubmit}>
      <input
        name='name'
        type='text'
        placeholder='Username'
        onChange={handleInputChange}
        value={formData.name}
      />
      <input
        name='email'
        type='email'
        placeholder='Email'
        onChange={handleInputChange}
        value={formData.email}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        onChange={handleInputChange}
        value={formData.password}
      />
      <input
        name='password_confirmation'
        type='password'
        placeholder='Confirm Password'
        onChange={handleInputChange}
        value={formData.password_confirmation}
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
