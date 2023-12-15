import React from "react";
import { Link } from "react-router-dom";

const ConfirmationSuccess = () => {
  return (
    <div className=" grid justify-center items-center h-screen">
      <div>
        <p className=" text-center">
          Your email has been confirmed successfully!
        </p>
        <p className=" text-center">
          You can now{" "}
          <Link to="/signin" className=" text-blue-500">
            sign in
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ConfirmationSuccess;
