import {React, Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import Loader from '../components/Loader'
import styled from 'styled-components'
import Island from '../models/Island';

const Section = styled.section`
  
`;

const Home = () => {
  return (
    <Section>
      <Canvas camera={{near: 0.1, far: 1000}}>
        <Suspense fallback={<Loader />} >
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island />
        </Suspense>
      </Canvas>
    </Section>
  )
}

export default Home
