import React, { useState } from "react";

const Contact = () => {
    const contact = useState({})


  return (
    <div className="app-container">
      <h2 className="font-bold text-[50px] lg:w-[60%]">Submit a help request and we'll get in touch shortly.</h2>

      <div className="flex items-center justify-between mt-10">
        <div className="lg:w-[50%]">
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
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>

        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
