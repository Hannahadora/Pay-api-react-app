import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";

const Signup = () => {
  const contact = useState({});


  return (
    <div className="app-container">
      <div className="lg:w-[60%] mx-auto lg:my-[70px] my-[50px]">
        <h3 className="text-center font-medium text-[30px]">Sign In Here</h3>

        <div className="mt-[40px]">
          <form className="flex flex-col">
            <input
              className="signup-input"
              type="text"
              id="first_name"
              placeholder="First name"
              value={contact.first_name}
            />
            <input
              className="signup-input"
              type="text"
              id="last_name"
              placeholder="Last name"
              value={contact.last_name}
            />
            <input
              className="signup-input"
              type="text"
              id="email"
              placeholder="Email"
              value={contact.email}
            />
            <input
              className="signup-input"
              type="text"
              id="phone_number"
              placeholder="Phone number"
              value={contact.phone_number}
            />
            <input
              className="signup-input"
              type="text"
              placeholder="Password"
              value={contact.password}
            />
          
            <div className="flex items-center">
              <input type="checkbox" id="update" value={contact.update} />
              <label className="ml-3" htmlFor="update">
                I agree to terms and policies
              </label>
            </div>

            <div className="mt-10">
              <ButtonComponent title={"Submit"} tert={"tert-btn"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
