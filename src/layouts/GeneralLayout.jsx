import Navbar from '@/components/Navbar';
import PromotionBar from '@/components/PromotionBar';
import React from 'react';

const GeneralLayout = ({ children }) => {
  return (
    <>
      <PromotionBar />
      <Navbar />
      {children}
    </>
  );
};

export default GeneralLayout;
