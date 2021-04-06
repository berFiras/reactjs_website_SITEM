import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaSnapchatSquare,
  FaMailBulk,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
  SocialLinkWrap,
  FacebookLink,
  InstagramLink,
  LinkedInLink,
  SnapLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contacts</FooterLinkTitle>
              <FooterLink to="/">
                <FaPhone /> +2163333333
              </FooterLink>
              <FooterLink to="/">
                <FaMailBulk /> Sitem@Sitem.com
              </FooterLink>
              <FooterLink to="/">
                <FaMapMarkerAlt /> Ajim Djerba
              </FooterLink>
              <FooterLink to="/">
                <FaClock /> Lun - Ven 09.00 - 18.00h
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink to="/">Développement Web</FooterLink>
              <FooterLink to="/">E-marketing</FooterLink>
              <FooterLink to="/">Graphique Design</FooterLink>
              <FooterLink to="/">Community Management</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/contactus">Phone</FooterLink>
              <FooterLink to="/contactus">Mail</FooterLink>
              <FooterLink to="/contactus">Investors</FooterLink>
              <FooterLink to="/contactus">Careers</FooterLink>
              <FooterLink to="/contactus">Services</FooterLink>
            </FooterLinkItems> */}
            <FooterLinkItems>
              <FooterLinkTitle>Réseaux Sociaux</FooterLinkTitle>
              <FooterLink to="/contactus">Facebook</FooterLink>
              <FooterLink to="/contactus">Instagram</FooterLink>
              <FooterLink to="/contactus">Snapchat</FooterLink>
              <FooterLink to="/contactus">Email</FooterLink>
              <FooterLink to="/contactus">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialLinkWrap>
        <FacebookLink to="/contactus">
          <FaFacebookSquare />
        </FacebookLink>
        <InstagramLink to="/contactus">
          <FaInstagramSquare />
        </InstagramLink>
        <LinkedInLink to="/contactus">
          <FaLinkedin />
        </LinkedInLink>
        <SnapLink to="/contactus">
          <FaSnapchatSquare />
        </SnapLink>
      </SocialLinkWrap>
      <FooterCopyRight>Copyrights © STE SITEM 2021</FooterCopyRight>
    </FooterContainer>
  );
};
export default Footer;
