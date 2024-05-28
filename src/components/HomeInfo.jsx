import React from "react";
import { Heading, Span, InfoBox, Paragraph, StyledLink, ArrowImg } from "./styledComponents";
import arrow from "../assets/icons/arrow.svg"; // Adjust if arrow is a named export

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <Heading>
        Hi, I'm
        <Span>Kirondeep Bhattacharjee</Span>
        👋
        <br />
        A final year CSE student from SRMIST
      </Heading>
    );

  if (currentStage === 2) {
    return (
      <InfoBox>
        <Paragraph>
          Worked with many companies <br /> and picked up many skills along the way
        </Paragraph>

        <StyledLink to='/about'>
          Learn more
          <ArrowImg src={arrow} alt='arrow' />
        </StyledLink>
      </InfoBox>
    );
  }

  if (currentStage === 3) {
    return (
      <InfoBox>
        <Paragraph>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </Paragraph>

        <StyledLink to='/projects'>
          Visit my portfolio
          <ArrowImg src={arrow} alt='arrow' />
        </StyledLink>
      </InfoBox>
    );
  }

  if (currentStage === 4) {
    return (
      <InfoBox>
        <Paragraph>
          Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
        </Paragraph>

        <StyledLink to='/contact'>
          Let's talk
          <ArrowImg src={arrow} alt='arrow' />
        </StyledLink>
      </InfoBox>
    );
  }

  return null;
};

export default HomeInfo;
