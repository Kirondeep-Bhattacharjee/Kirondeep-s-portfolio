import styled from 'styled-components';

import "react-vertical-timeline-component/style.min.css";

import  CTA  from "../components/CTA";
import { skills } from "../constants";

// Define styled components
const MaxContainer = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding-bottom: 3rem;
  padding-top: calc(126px - 1.5rem);
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: calc(100vh - 80px);
`;

const HeadText = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  @media (min-width: 640px) {
    font-size: 5rem;
  }
  font-family: 'Poppins', sans-serif;
`;

const BlueGradientText = styled.span`
  background: linear-gradient(to right, #00c6ff, #0072ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubheadText = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  position: relative;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
  font-family: 'Poppins', sans-serif;
`;

const TextContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #64748b;
`;

const SkillsContainer = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const SkillsGrid = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const SkillBlock = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  transition: 250ms;
  perspective: 500px;

  .btn-back {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: inherit;
    height: inherit;
    transition: 250ms;
    transform-style: preserve-3d;
    transform-origin: bottom right;
    transform: rotateZ(15deg);
    will-change: transform;
    box-shadow: 16px 0 40px #e4e4e4;
  }

  .btn-front {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: inherit;
    height: inherit;
    background-color: #ffffff33;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    transition: 250ms;
    transform-style: preserve-3d;
    transform-origin: top left;
    overflow: hidden;
  }

  &:hover > .btn-back {
    transform: translateZ(20px) rotateZ(15deg) rotateX(-20deg) rotateY(-20deg);
  }

  &:hover > .btn-front {
    transform: translateZ(80px) translateY(-5px) rotateX(15deg) rotateY(15deg);
  }
`;



const Divider = styled.hr`
  border-color: #e2e8f0;
`;

const About = () => {
  return (
    <MaxContainer>
      <HeadText>
        Hello, I'm{" "}
        <BlueGradientText className='font-semibold drop-shadow'>
          {" "}
          Kirondeep Bhattacharjee
        </BlueGradientText>{" "}
        👋
      </HeadText>

      <TextContainer>
        <p>
        I'm a 4th-year Computer Science student passionate about cybersecurity and currently exploring the vast world of web development. I love diving into complex problems, finding creative solutions, and continuously learning new technologies.
        </p>
      </TextContainer>

      <SkillsContainer>
        <SubheadText>My Skills</SubheadText>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillBlock key={skill.name}>
              <div className={`btn-back rounded-xl ${skill.bgColor}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </SkillBlock>
          ))}
        </SkillsGrid>
      </SkillsContainer>

      

      <Divider />

      <CTA />
    </MaxContainer>
  );
};

export default About;
