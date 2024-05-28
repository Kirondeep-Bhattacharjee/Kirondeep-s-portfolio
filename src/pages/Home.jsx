import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import sakura from "../assets/sakura.mp3";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import soundoff from "../assets/icons/soundoff.png";
import soundon from "../assets/icons/soundon.png";
import {Bird} from "../models/Bird";
import {Island} from "../models/Island";
import {Plane} from "../models/Plane";
import {Sky} from "../models/Sky";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MusicControl = styled.div`
  position: absolute;
  bottom: 2px;
  left: 2px;

  img {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    object-fit: contain;
  }
`;

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  cursor: ${({ isRotating }) => (isRotating ? "grabbing" : "grab")};
`;

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <Section>
      <InfoContainer>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </InfoContainer>

      <StyledCanvas isRotating={isRotating} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </StyledCanvas>

      <MusicControl>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </MusicControl>
    </Section>
  );
};

export default Home;
