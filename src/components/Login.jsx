import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    //console.log(email.current.value);
    //console.log(password.current.value);
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    //e.preventDefault();
  };

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg'
          alt='logo'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-8 bg-black/85 text-white font-semibold w-3/12 my-18 px-12 mx-auto right-0 left-0 rounded'
      >
        <h1 className='font-bold pb-6 pt-5 px-2.5 text-3xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 m-2 border border-gray-400 w-full rounded'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 m-2 border border-gray-400 w-full rounded'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 m-2 border border-gray-400 w-full rounded'
        />
        <p className=' pl-2.5 text-red-500'>{errorMessage}</p>
        <button
          className='p-3 mt-5 mx-2 bg-red-600 font-semibold rounded-md w-full'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='pt-5 pl-2.5 text-gray-400'>
          {isSignInForm ? `New to Netflix? ` : "Already Registered! "}
          <span
            onClick={handleClick}
            className='text-white font-semibold cursor-pointer'
          >
            {isSignInForm ? "Sign up now." : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
