
export const validate = (email, password, name) => {
  const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
  
  if(!isNameValid) return "Name is not valid";
  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "Password is not valid";

  return null;
}

export default validate