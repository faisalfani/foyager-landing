import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const PromotionBar = () => {
  return (
    <Box
      w='100%'
      bgGradient='linear(to-r, blue.500, pink.500)'
      display='flex'
      justifyContent='center'
      alignItems='center'
      py='2'
      columnGap='2'
    >
      <Text as='strong' color='white' fontSize='sm'>
        Dapatkan kesempatan belajar web programming, GRATIS!
      </Text>
      <Box
        background='blackAlpha.300'
        paddingX='2'
        paddingY='1'
        borderRadius='5px'
        cursor='pointer'
        transition='all'
        transitionDuration='0.5s'
        _hover={{
          background: 'whiteAlpha.300',
        }}
      >
        <Text opacity={1} color='white'>
          Coming Soon
        </Text>
      </Box>
    </Box>
  );
};

export default PromotionBar;
