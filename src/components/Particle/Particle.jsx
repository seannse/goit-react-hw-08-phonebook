import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particlesConfig } from './config';

const ParticleWave = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return <Particles params={particlesConfig} init={particlesInit} />;
};

export default ParticleWave;
