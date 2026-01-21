import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { TrustedBy } from '../components/TrustedBy';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
    </>
  );
};