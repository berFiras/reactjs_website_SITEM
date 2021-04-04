import emailjs from "emailjs-com";
import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  ContactUsContainer,
} from "./contactusElements";
const ContactUsPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26ompev",
        "template_wrlumxe",
        e.target,
        "user_8WpmHlfHQXVq5jdETgFRL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">SITEM</NavLogo>
        </NavbarContainer>
      </Nav>
      {/* <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send Message" />
      </form> */}
      <ContactUsContainer>
        <h1>contact</h1>
      </ContactUsContainer>
    </div>
  );
};

export default ContactUsPage;
