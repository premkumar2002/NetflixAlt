import { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebas"; // Ensure this path is correct
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGINBG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errormessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate input based on whether it's sign-up or sign-in
    const message = validate(
      email.current.value,
      password.current.value,
      name.current?.value
    ); // Validate name during sign-up

    setErrorMessage(message);

    if (message) return;

    if (isSignInForm) {
      // Sign up
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          })
          .catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`); // Set error message
      }
    } else {
      // Sign in logic here
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        // Signed in
        const user = userCredential.user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`); // Set error message
      }
    }
  };

  return (
    <div className="h-screen relative">
      <Header />
      <div className="fixed inset-0">
        <img
          src={LOGINBG}
          alt="LoginBG"
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>
      <form
        className="absolute bg-black max-w-lg w-full px-16 pt-10 py-32 pb-5 mx-auto left-0 right-0 my-36 text-white bg-opacity-75"
        onSubmit={handleLogin} // Use onSubmit for form submission
      >
        <h1 className="m-2 py-2 text-3xl font-bold">
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500"
        />
        {isSignInForm && (
          <input
            type="password"
            placeholder="Confirm password"
            className="px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500"
          />
        )}
        <p className="text-red-600 px-4 text-center font-semibold">
          {errormessage}
        </p>
        <button
          type="submit" // Set button type to submit
          className="border border-red-700 bg-red-600 py-2 m-2 w-full rounded-md transition-colors duration-100 hover:bg-red-700 "
        >
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 text-center">OR</p>
        <button className="border border-gray-500 font-bold bg-gray-400 w-full m-2 py-2 rounded-md bg-transparent ">
          Use a sign-in code
        </button>
        <Link>
          <p className="text-center m-4">Forgot Password?</p>
        </Link>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {!isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already a member? Sign In"}
        </p>
        <p className="pt-4 text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link className="text-blue-700">Learn more.</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
