import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../services/supabase";

const SignUp = () => {
  let navigate = useNavigate();
  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_ANON_KEY
  );

  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    number: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            user_name: formData.userName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
      navigate("/confirmation-success");
      // navigate("/signin");
    } catch (error) {
      alert(error);
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center h-screen justify-center">
      <div className=" bg-[#ECBC76] w-1/2 h-full px-8 md:px-10 lg:px-16  ">
        <div className=" grid justify-center h-full items-center">
          <img
            className=" w-[269px] h-[256px]"
            src="https://res.cloudinary.com/dybryo15k/image/upload/v1701704852/Saly-3_e8d2l6.png"
            alt=""
          />
        </div>
      </div>
      <div className=" absolute ">
        <form
          onSubmit={handleSubmit}
          className=" bg-white lg:w-[450px] rounded-3xl px-5 py-10 gap-4  grid"
        >
          <div className=" flex justify-between items-center">
            <p>Welcome to NexTrade</p>
            <div>
              <p className=" text-[20px] font-bold text-[#8D8D8D]">
                Have an Account ?
              </p>
              <Link to="/signin" className=" text-[#ECBC76] cursor-pointer">
                Sign in
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[50px] font-bold">Sign Up</p>
          </div>

          {/* 1st input */}
          <div>
            <label htmlFor="">Enter your email address</label>
            <input
              className=" h-[47px] w-full border-2 border-[#ECBC76] rounded-md"
              type="text"
              placeholder="Username or email address"
              name="email"
              onChange={handleChange}
              // value={email}
              // onChange={handleEmailChange}
            />
          </div>

          <div className=" flex items-center justify-between gap-3">
            {/* User name */}
            <div>
              <label htmlFor="">User name</label>
              <input
                className=" h-[47px] w-full border-2 border-[#ECBC76] rounded-md"
                type="text"
                placeholder="User name"
                name="userName"
                onChange={handleChange}
                // value={username}
                // onChange={handleUsernameChange}
              />
            </div>
            {/* Contact Number */}
            <div>
              <label htmlFor="">Contact Number</label>
              <input
                className=" h-[47px] w-full border-2 border-[#ECBC76] rounded-md"
                placeholder="Contact Number"
                name="number"
                onChange={handleChange}
                // value={phoneNumber}
                // onChange={handlePhoneNumberChange}
              />
            </div>
          </div>

          {/* sec input */}
          <div>
            <label htmlFor="">Enter your Password</label>
            <input
              className=" h-[47px] w-full border-2 border-[#ECBC76] rounded-md"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}

              // value={password}
              // onChange={handlePasswordChange}
            />
            <div className=" absolute right-0">
              <div className=" border-2 border-black p-1 rounded-full relative grid justify-center items-center bottom-[37.5px] right-[25px]">
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className=" px-4 py-2 border border-[#ECBC76]  rounded-full "
                >
                  {showPassword ? "" : ""}
                </button>
              </div>
            </div>
          </div>

          <div className=" justify-between items-center flex">
            <div>
              <button
                type="submit"
                // onClick={handleSignUp}
                className=" w-[150px] py-2 bg-[#ECBC76] text-white font-bold rounded-md"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center">
              <p className=" text-[18px] text-gray-400">OR</p>
            </div>
            <div>
              <button className=" flex justify-center items-center px-2 py-2 rounded-md w-full bg-[#FFF4E3]">
                <img src="" alt="" />{" "}
                <p className="text-[#ECBC76]">Sign in with Google</p>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className=" bg-white w-1/2 h-full px-8 md:px-10 lg:px-16 ">
        <div className=" grid justify-center h-full items-center">
          <img
            className=" w-[450px] h-[450px]"
            src="https://res.cloudinary.com/dybryo15k/image/upload/v1701704852/Saly-2_trlcep.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
