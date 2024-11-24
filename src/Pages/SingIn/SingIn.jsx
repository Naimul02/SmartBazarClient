import React from "react";

import { Link } from "react-router-dom";

const SingIn = () => {
  // const [error, setError] = useState("");

  // const navigate=useNavigate()
  // const from=location.state?.from?.pathname || '/'

  const loginhander = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div>
        <div className=" ">
          <div className="">
            <div className=" mx-auto  bg-center place-items-center  mt-10 mb-10 lg:mr-20 lg:ml-8  md:mr-4 mr-4 ml-4 lg:h-screen flex lg:items-center justify-center ">
              <div className="card flex-shrink-0  md:w-2/3  w-full border    bg-base-200 border-slate-900 ">
                <h1 className="lg:text-3xl md:text-3xl  lg:mt-5  mt-5 text-xl text-center">
                  Log In Your Account
                </h1>

                <div className="card-body">
                  <form onSubmit={loginhander}>
                    {/* 2 */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white"> Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white ">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered "
                      />
                      <label className="label">
                        <span className="label-text-alt ">
                          {" "}
                          You not singup plese{" "}
                          <Link to="/singup" className="text-red-300">
                            Sing up
                          </Link>
                        </span>
                      </label>
                      <label className="label">
                        {/* <span className="label-text-alt text-red-500 ">
                          {error}{" "}
                        </span> */}
                      </label>
                    </div>

                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn bg-[#5FA800] text-white"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
