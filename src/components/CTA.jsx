import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CtaSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 4rem;
  }
`;

const CtaText = styled.p`
  color: #374151;
  font-weight: 800;
  font-size: 1.875rem;
  line-height: 2.25rem;
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ContactButton = styled(Link)`
  color: white;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  font-weight: 500;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  padding: 0.625rem 1.25rem;
  text-align: center;
  width: 100%;
  text-decoration: none;

  @media (min-width: 640px) {
    width: auto;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5); /* Equivalent to focus:ring-4 focus:ring-blue-300 */
  }
`;

const CTA = () => {
  return (
    <CtaSection>
      <CtaText>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </CtaText>
      <ContactButton to='/contact'>
        Contact
      </ContactButton>
    </CtaSection>
  );
};

export default CTA;
