import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const LoadingIndicator = () => {
  const SpinnerWrapper = styled.div`
    height: 100%;
    width: 100%;
  `;
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingIndicator;
