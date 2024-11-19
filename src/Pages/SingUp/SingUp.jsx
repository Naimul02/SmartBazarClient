import React, { useState } from "react";
import { Link } from "react-router-dom";

const Singup = () => {
  //   const notify = () => toast('Here is your toast.');
  //   const [error, setError] = useState("");
  const [file, setFile] = useState(null);

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
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <div>
      <div>
        <div className="mx-auto ">
          <div className=" bg-center place-items-center grid mt-10 mb-10 lg:mr-10 mr-4 ml-4   ">
            <div className="  md:w-2/3 w-full border     border-slate-700 rounded-2xl  ">
              <h1 className="lg:text-3xl md:text-3xl   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl  ">
                Create Account
              </h1>

              <div className="card-body">
                {/* 1/ */}
                <form onSubmit={singUpinPassword}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Full Name</span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Full Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* 2 */}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text "> Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered "
                      required
                    />
                  </div>
                  {/* 3 */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text ">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="input input-bordered "
                      required
                    />
                  </div>
                  {/* 4 */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text ">Photo Url</span>
                    </label>
                    <label
                      htmlFor="photourl"
                      className="btn  cursor-pointer w-full text-center py-2 input-bordered"
                    >
                      {file ? `Selected: ${file.name}` : "Choose File"}
                    </label>
                    <input
                      id="photourl"
                      type="file"
                      name="photourl"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  {/* 5 */}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text "> Select Your Role</span>
                    </label>
                    <div className="form-control">
                      <div className="input-group">
                        <select
                          name="role"
                          className="select select-bordered w-full"
                        >
                          <option disabled selected>
                            buyer
                          </option>
                          <option>Sellar</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  ">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered "
                      required
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {" "}
                        You already singup please{" "}
                        <Link to="/login" className="text-red-500">
                          Log in
                        </Link>
                      </span>
                    </label>
                    <label className="label">
                      {/* <span className="label-text-alt text-red-500 ">
                          {error}{" "}
                        </span> */}
                    </label>
                  </div>
                  <div className="    ">
                    {/* <button
                        onClick={googleLogInhanle}
                        className="btn   md:ml-24  lg:ml-8 md:ml btn-primary "
                      >
                        <FaGoogle className="inline mr-3 text-xl" />
                        Continue with Google
                      </button> */}

                    <div className="divider lg:hidden   ">OR</div>

                    {/* <button className="btn  md:ml-24 btn-primary  lg:ml-">
                      <FaFacebook className="inline   text-xl" />
                      Continue with Facebook{" "}
                    </button> */}
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn bg-[#5FA800] ">
                      Sing Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
