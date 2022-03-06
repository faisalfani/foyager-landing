import Container from '@/components/Container';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import WorksCarousel from '@/components/WorkCarousel';

const Works = () => {
  return (
    <Container
      height='100vh'
      fluid
      display='flex'
      flexDirection='column'
      rowGap='3rem'
    >
      <Box px='9rem' display='flex' flexDirection='column' rowGap='18px'>
        <Text>Work</Text>
        <Box
          display='flex'
          justifyContent='space-between'
          width='100%'
          alignItems='flex-end'
        >
          <Text
            fontSize='4xl'
            width='370px'
            lineHeight='103%'
            fontWeight='black'
          >
            We build timeless experience
          </Text>
          <Link to='/work'>
            <Text fontWeight='bold'>Take a peek!</Text>
          </Link>
        </Box>
      </Box>
      <Box>
        <WorksCarousel />
      </Box>
    </Container>
  );
};

export default Works;
