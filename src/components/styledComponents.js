import styled from "styled-components";
import { Link } from "react-router-dom";

export const Heading = styled.h1`
  @media (min-width: 640px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  text-align: center;
  color: white;
  margin: 0 1.25rem;
  background-color: #2b77e7;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 32rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 10px;
  border: #2b77e7;
`;

export const Span = styled.span`
  font-weight: 800;
  margin: 0 0.5rem;
  color: black;
`;

export const InfoBox = styled.div`
  text-align: center;
  margin: 0 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: white;
  max-width: 32rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: #2b77e7;
  border-radius: 10px;
  border: #2b77e7;
 
`;

export const Paragraph = styled.p`
  font-weight: 500;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
  text-align: center;
`;

export const StyledLink = styled(Link)`
   padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  color: #3b82f6; // Adjust this color to match text-blue-500
  text-align: center;
  font-weight: 600;
  @media (min-width: 640px) {
    width: 50%;
  }
  width: 90%;
  position: absolute;
  bottom: -1.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border: #fff;
  
  
`;

export const ArrowImg = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  margin-left: 0.5rem;
`;
