import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'swiper/css';
import 'swiper/css/autoplay';

const WorksCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={150}
      slidesPerView={2}
      centeredSlides
      loop
      autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
    >
      <Box
        position='absolute'
        display='flex'
        alignItems='center'
        height='100%'
        left='1rem'
        zIndex={100}
        slot='container-start'
        as='span'
      >
        <Box
          h={38}
          w={38}
          bgColor='whiteAlpha.600'
          display='flex'
          justifyContent='center'
          alignItems='center'
          borderRadius='50px'
          as='div'
          id='swiper-prev'
          cursor='pointer'
        >
          <ChevronLeftIcon w={6} h={12} color='black' />
        </Box>
      </Box>
      <SwiperSlide>
        <Box height='20vh' bgColor='blue.300'></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box height='20vh' bgColor='red.300'></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box height='20vh' bgColor='orange.300'></Box>
      </SwiperSlide>
      <Box
        position='absolute'
        right='1rem'
        top={0}
        display='flex'
        alignItems='center'
        height='100%'
        zIndex={102}
        slot='container-end'
        as='span'
      >
        <Box
          h={38}
          w={38}
          bgColor='whiteAlpha.600'
          display='flex'
          justifyContent='center'
          alignItems='center'
          borderRadius='50px'
          as='div'
          id='swiper-next'
          cursor='pointer'
        >
          <ChevronRightIcon w={6} h={12} color='black' />
        </Box>
      </Box>
    </Swiper>
  );
};

export default WorksCarousel;
