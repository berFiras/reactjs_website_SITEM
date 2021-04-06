import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ContactWrap = styled.div`
  background: #eef6fc;
  width: 100%;
  min-height: 1100px;
`;
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "#000")};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-content: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const ContactUsContainer = styled.div`
  background: #000;
  margin-top: 20px;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  border-radius: 15px;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  color: #49a3da;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 600;
`;
export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: #fff;
  padding: 5%;
  overflow: hidden;
  outline: none;
  border: none;
  &:focus {
    box-shadow: 0 0 50px #49a3da;
  }
`;
export const Textarea = styled.textarea`
  width: 300px;
  height: 100px;
  overflow: hidden;
  outline: none;
  border: none;
  padding: 5%;
  border-radius: 15px;
  &:focus {
    box-shadow: 0 0 50px #49a3da;
  }
`;

export const Label = styled.label`
  color: #fff;
  margin: 10px;
`;
export const Button = styled.button`
  width: 290px;
  height: 45px;
  background-color: #49a3da;
  font-size: 14px;
  color: #fff;
  margin: 20px;
  outline: none;
  border: none;
  border-radius: 25px;
  &:hover {
    background-color: #2a65b0;
    cursor: pointer;
    transition: 2s all ease;
  }
`;
