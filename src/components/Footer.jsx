import styled from 'styled-components';
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

// Styled-components
const FooterContainer = styled.footer`
  max-width: 80rem;
  margin: 0 auto;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const Divider = styled.hr`
  border-color: #e2e8f0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const FooterText = styled.p`
  color: #64748b;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const SocialLink = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Divider />

      <FooterContent>
        <FooterText>
          © 2024 <strong>Kirondeep Bhattacharjee</strong>. All rights reserved.
        </FooterText>

        <SocialLinksContainer>
          {socialLinks.map((link) => (
            <SocialLink key={link.name} to={link.link} target='_blank'>
              <SocialIcon src={link.iconUrl} alt={link.name} />
            </SocialLink>
          ))}
        </SocialLinksContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
