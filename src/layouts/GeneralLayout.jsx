import PromotionBar from '@/components/PromotionBar';
import React from 'react';

const GeneralLayout = ({ children }) => {
  return (
    <>
      <PromotionBar />
      ini layout{children}
    </>
  );
};

export default GeneralLayout;
