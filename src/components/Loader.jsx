import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Html } from '@react-three/drei';

// Keyframes for spin animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled components
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 80px; // 20 * 4
  height: 80px; // 20 * 4
  border: 2px solid rgba(0, 0, 255, 0.2); // border-blue-500 with opacity
  border-top: 2px solid #0000ff; // border-t-blue-500
  border-radius: 50%;
  animation: ${spin} 1s linear infinite; // animate-spin
`;

const Loader = () => {
  return (
    <Html>
      <LoaderContainer>
        <Spinner />
      </LoaderContainer>
    </Html>
  );
};

export default Loader;
