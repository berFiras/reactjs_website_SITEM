import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/contactus">Phone</FooterLink>
              <FooterLink to="/contactus">Mail</FooterLink>
              <FooterLink to="/contactus">Investors</FooterLink>
              <FooterLink to="/contactus">Careers</FooterLink>
              <FooterLink to="/contactus">Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/contactus">Phone</FooterLink>
              <FooterLink to="/contactus">Mail</FooterLink>
              <FooterLink to="/contactus">Investors</FooterLink>
              <FooterLink to="/contactus">Careers</FooterLink>
              <FooterLink to="/contactus">Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/contactus">Phone</FooterLink>
              <FooterLink to="/contactus">Mail</FooterLink>
              <FooterLink to="/contactus">Investors</FooterLink>
              <FooterLink to="/contactus">Careers</FooterLink>
              <FooterLink to="/contactus">Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/contactus">Phone</FooterLink>
              <FooterLink to="/contactus">Mail</FooterLink>
              <FooterLink to="/contactus">Investors</FooterLink>
              <FooterLink to="/contactus">Careers</FooterLink>
              <FooterLink to="/contactus">Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;
