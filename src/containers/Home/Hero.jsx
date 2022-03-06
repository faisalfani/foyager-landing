import Container from '@/components/Container';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import InteractiveIframe from '@/components/InteractiveIframe/Loadable';
import Lottie from 'react-lottie';
import animationData from './underline';

const TextHero = styled(Text)`
  font-size: 72px;
  font-weight: 900;
  line-height: 110%;
`;

const StyledAnchor = styled.a`
  color: #0e6ffe;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const WithUnderLine = styled.span`
  position: relative;
`;

const ImageContainer = styled.span`
  position: absolute;
  left: 0;
  bottom: -45px;
`;
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container display='flex' height='80vh' alignItems='center' fluid pl='9rem'>
      <Box display='flex' flexDirection='column' rowGap='2rem' width='55vw'>
        <TextHero>
          We are passionate about deliver{' '}
          <WithUnderLine>
            beautiful{' '}
            <ImageContainer>
              <Lottie options={defaultOptions} width={300} />
            </ImageContainer>
          </WithUnderLine>{' '}
          things.
        </TextHero>
        <StyledAnchor to='mailto:faisal.isfahani@gmail.com'>
          Have a project in mind? Let&apos;s get to work.
        </StyledAnchor>
      </Box>
      <InteractiveIframe />
    </Container>
  );
};

export default Hero;
