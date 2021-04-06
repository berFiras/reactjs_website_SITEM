import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 010px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #49a3da;
    transition: 0.3s ease-in-out;
  }
`;
export const FooterCopyRight = styled.div`
  display: flex;
  color: #fff;
  margin: 0;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const SocialLinkWrap = styled.div`
  color: #fff;
  display: flex;
  width: 200px;
  margin-left: 43.5%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  /* font-size: 20px; */
`;

export const FacebookLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #49a3da;
    transition: 0.3s ease-in-out;
  }
`;
export const InstagramLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #49a3da;
    transition: 0.3s ease-in-out;
  }
`;
export const LinkedInLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #49a3da;
    transition: 0.3s ease-in-out;
  }
`;
export const SnapLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #49a3da;
    transition: 0.3s ease-in-out;
  }
`;
