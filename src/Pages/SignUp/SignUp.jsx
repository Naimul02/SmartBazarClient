import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/userProvider/userProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa"; // Import the Google icon from react-icons

const Singup = () => {
  const [file, setFile] = useState(null);
  const [error, seterror] = useState("");

  const { creactUser, UpdateUser, singInWithGoogle } = useContext(AuthContext);

  const singUpinPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const photourl = form.photourl.files[0];
    setFile(photourl);
    const phoneNumber = form.phoneNumber.value;
    const password = form.password.value;
    console.log(name, email, password, role, photourl, phoneNumber);
    const data = new FormData();
    data.append("image", photourl);
    fetch(
      "https://api.imgbb.com/1/upload?key=d71bd4fa12b7626997bd14a0a0617dbf",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => updateProfile(name, data.data.url));

    creactUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("accessToken", user.accessToken);
        form.reset();
        seterror("");
        toast.success("Please check your email and verify it.");
      })
      .catch((error) => {
        console.error("error", error);
        seterror(error.message);
      });
  };

  const updateProfile = (name, PhotoURl) => {
    const profile = {
      displayName: name,
      photoURL: PhotoURl,
    };
    UpdateUser(profile)
      .then(() => {})
      .catch((error) => console.error("error", error));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
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
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Your Account
          </h1>
          <form onSubmit={singUpinPassword}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photourl"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Profile Picture
              </label>
              <label
                htmlFor="photourl"
                className="block px-4 py-2 border border-dashed rounded-md text-center text-gray-500 cursor-pointer hover:border-green-500"
              >
                {file ? `Selected: ${file.name}` : "Upload your photo"}
              </label>
              <input
                id="photourl"
                type="file"
                name="photourl"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Select Your Role
              </label>
              <select
                name="role"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="" disabled selected>
                  Select a role
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <p>{error}</p>
              <div className="text-right mt-2">
                <span className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-green-600 hover:underline">
                    Log in
                  </Link>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Google Sign-In Button with Google Icon */}
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
        </div>
      </div>
    </div>
  );
};

export default Singup;
