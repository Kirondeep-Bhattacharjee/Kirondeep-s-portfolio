import styled from 'styled-components';
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

// Styled-components
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

const DescriptionText = styled.p`
  color: #64748b;
  margin-top: 0.5rem;
  line-height: 1.75;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5rem 0;
  gap: 4rem;
`;

const ProjectCard = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 25rem;
  }
`;

const BlockContainer = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  transition: 250ms;
  perspective: 500px;
`;

const BtnBack = styled.div`
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

  &.rounded-xl {
    border-radius: 0.75rem;
  }
`;

const BtnFront = styled.div`
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

  &.rounded-xl {
    border-radius: 0.75rem;
  }

  display: flex;
  justify-center: center;
  align-items: center;
`;

const ProjectInfo = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h4`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  margin-top: 0.5rem;
  color: #64748b;
`;

const ProjectLink = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Poppins', sans-serif;

  a {
    font-weight: 600;
    color: #2563eb;
    text-decoration: none;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

const Divider = styled.hr`
  border-color: #e2e8f0;
`;

const Projects = () => {
  return (
    <MaxContainer>
      <HeadText>
        My{" "}
        <BlueGradientText className='drop-shadow'>
          Projects
        </BlueGradientText>
      </HeadText>

      <DescriptionText>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </DescriptionText>

      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.name}>
            <BlockContainer>
              <BtnBack className={`rounded-xl ${project.theme}`} />
              <BtnFront className='rounded-xl'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </BtnFront>
            </BlockContainer>

            <ProjectInfo>
              <ProjectTitle>
                {project.name}
              </ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                />
              </ProjectLink>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsContainer>

      <Divider />

      <CTA />
    </MaxContainer>
  );
};

export default Projects;
