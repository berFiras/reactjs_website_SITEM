import emailjs from "emailjs-com";
import React from "react";
import {
  ContactWrap,
  Nav,
  NavbarContainer,
  NavLogo,
  ContactUsContainer,
  FormWrapper,
  Title,
  Form,
  Input,
  Textarea,
  Label,
  Button,
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
    <ContactWrap>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">SITEM</NavLogo>
        </NavbarContainer>
      </Nav>
      <ContactUsContainer>
        <FormWrapper>
          <Title>Nous Contacter</Title>
          <Form onSubmit={sendEmail}>
            <Label>Nom</Label>
            <Input type="text" name="name"></Input>
            <Label>Email</Label>
            <Input type="email" name="email"></Input>
            <Label>Sujet</Label>
            <Input type="text" name="subject"></Input>
            <Label>Message</Label>
            <Textarea type="textarea" name="message"></Textarea>
            <Button type="submit" value="Send Message">
              Envoyer le message
            </Button>
          </Form>
        </FormWrapper>
      </ContactUsContainer>
    </ContactWrap>
  );
};

export default ContactUsPage;
