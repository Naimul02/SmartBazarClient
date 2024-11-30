import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/userProvider/userProvider";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const { logIn, singInWithGoogle } = useContext(AuthContext);
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const [error, seterror] = useState("");

  const loginHandler = (event) => {
    const form = event.target;
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("accessToken", user.accessToken);
        form.reset();
        seterror("");
        // Navigate(from, { replace: true });
        // if(!user.emailVerified){
        //   toast.error("plese Email Verigiction")

        // }else{

        // }
      })
      .catch((error) => {
        seterror(error.message);
        console.log("error", error);
      });
  };

  const googleloginHandler = () => {
    singInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("accessToken", user.accessToken);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10 pb-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Welcome Back!
          </h1>
          <form onSubmit={loginHandler}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <p className="text-red-500 text-center mb-3">{error}</p>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4">
            <button
              onClick={googleloginHandler}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            >
              {/* Google Icon */}
              <FaGoogle size={20} />
              <span>Sign Up with Google</span>
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
