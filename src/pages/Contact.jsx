import React, { useState } from "react";
import PartnersGrid from "../components/Contact.jsx/PartnersGrid";
import ButtonComponent from "../components/ButtonComponent";

const Contact = () => {
  const contact = useState({});

  return (
    <div className="app-container lg:mt-20 mt-10">
      <h2 className="lg:text-left text-center font-bold lg:text-[60px] text-[36px] leading-[1] lg:w-[50%]">
        Submit a help request and we'll get in touch shortly.
      </h2>

      <div className="lg:flex items-center justify-between mt-20">
        <div className="lg:w-[47%]">
          <form className="flex flex-col">
            <input
              className="contact-input"
              type="text"
              id="name"
              placeholder="Name"
              value={contact.name}
            />
            <input
              className="contact-input"
              type="text"
              id="email"
              placeholder="Email"
              value={contact.email}
            />
            <input
              className="contact-input"
              type="text"
              id="company_name"
              placeholder="Company Name"
              value={contact.company_name}
            />
            <input
              className="contact-input"
              type="text"
              id="title"
              placeholder="Title"
              value={contact.title}
            />
            <textarea
              className="contact-input"
              name="message"
              id="message"
              placeholder="Message"
              value={contact.message}
              cols="20"
              rows="10"
            ></textarea>

            <div className="flex items-center">
              <input type="checkbox" id="update" value={contact.update} />
              <label className="ml-3" htmlFor="update">
                Stay up-to-date with company announcements and updates to our
                API
              </label>
            </div>

            <div className="mt-10">
              <ButtonComponent title={"Submit"} tert={"tert-btn"} />
            </div>
          </form>
        </div>

        <div className="lg:ml-[24px] lg:mt-[0] mt-[40px] lg:w-[47%]">
          <h3 className="font-medium lg:text-[40px] text-[24px] lg:text-left text-center">
            Join thousand of innovators already building with us
          </h3>
          <PartnersGrid />
        </div>
      </div>
    </div>
  );
};

export default Contact;
