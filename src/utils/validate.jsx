export const checkValidate = (email, password) => {
  //const isName = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(name);

  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //if (!isName) return "Please enter a valid name.";
  if (!isEmailValid) return "Please enter a valid email.";
  if (!isPasswordValid) return "Please enter a valid password.";

  return null; // no errors
};
