import { Box } from '@chakra-ui/react';
import React from 'react';

const Container = ({ fluid, children, ...restProps }) => {
  return (
    <Box {...restProps} px={!fluid && '9rem'}>
      {children}
    </Box>
  );
};

export default Container;
