import React, { useState } from "react";
import PartnersGrid from "../components/Contact.jsx/PartnersGrid";
import ButtonComponent from "../components/ButtonComponent";

const Contact = () => {
  const contact = useState({});

  return (
    <div className="app-container mt-20">
      <h2 className="font-bold text-[60px] leading-[1] lg:w-[50%]">
        Submit a help request and we'll get in touch shortly.
      </h2>

      <div className="flex items-center justify-between mt-20">
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

        <div className="ml-[24px] w-[47%]">
          <h3 className="font-medium text-[40px]">
            Join thousand of innovators already building with us
          </h3>
          <PartnersGrid />
        </div>
      </div>
    </div>
  );
};

export default Contact;
