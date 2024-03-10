import "./login_form.styles.scss";
import { useState } from "react";
// import AuthenticationService from "../../services/authentication";

const LoginForm = () => {
  // const { loginUser } = useAuth();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await AuthenticationService.login(formData);
  //     loginUser();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // return (
  //   <form className='login-form' onSubmit={handleOnSubmit}>
  //     <input
  //       type='email'
  //       name='email'
  //       value={formData.email}
  //       placeholder='Email'
  //       onChange={handleInputChange}
  //     />
  //     <input
  //       type='password'
  //       name='password'
  //       value={formData.password}
  //       placeholder='Password'
  //       onChange={handleInputChange}
  //     />
  //     <button type='submit'>Login</button>
  //   </form>
  // );
};

export default LoginForm;
