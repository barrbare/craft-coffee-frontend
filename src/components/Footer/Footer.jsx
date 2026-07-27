import React from "react";
import styled from "styled-components";
import { FiCoffee, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 3rem 4rem 1.5rem;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};

  svg {
    font-size: 1.6rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    color: #d7ccc8;
    font-size: 1.3rem;
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  font-size: 0.85rem;
  color: #a1887f;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <FiCoffee /> Craft Coffee
        </BrandSection>
        <SocialLinks>
          <a href="#" aria-label="Instagram"><FiInstagram /></a>
          <a href="#" aria-label="Facebook"><FiFacebook /></a>
          <a href="#" aria-label="Twitter"><FiTwitter /></a>
        </SocialLinks>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Craft Coffee. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;