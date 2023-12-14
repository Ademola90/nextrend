import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../services/supabase";

const SignUp = () => {
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
    } catch (error) {
      alert(error);
    }
  }

  // const navigate = useNavigate(); // Initialize useNavigate

  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSignUp = async () => {
  //   try {
  //     const { user, session, error } = await supabase.auth.signUp({
  //       email,
  //       password,
  //       username,
  //       phone: phoneNumber,
  //     });

  //     if (error) {
  //       console.error("Sign up error:", error);
  //       // Handle error (e.g., show an error message)
  //     } else {
  //       console.log("User signed up:", user);
  //       console.log("Session:", session);

  //       // Redirect user to the home page or any other desired page
  //       navigate("/home");
  //     }
  //   } catch (error) {
  //     console.error("Unexpected error during sign up:", error);
  //   }
  // };

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
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              // value={password}
              // onChange={handlePasswordChange}
            />
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
