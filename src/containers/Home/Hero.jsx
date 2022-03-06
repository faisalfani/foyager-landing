import Container from '@/components/Container';
import { Spinner, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import InteractiveIframe from '@/components/InteractiveIframe/Loadable';

const TextHero = styled(Text)`
  font-size: 72px;
  width: 55vw !important;
  font-weight: 900;
  line-height: 110%;
`;

const Hero = () => {
  return (
    <Container display='flex' height='80vh' alignItems='center' fluid pl='9rem'>
      <TextHero>We are passionate about deliver beautiful things.</TextHero>
      <InteractiveIframe />
    </Container>
  );
};

export default Hero;
