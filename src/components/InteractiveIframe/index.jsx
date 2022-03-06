import React from 'react';

const InteractiveIframe = () => {
  return (
    <iframe
      src='https://macbook-threejs.vercel.app/'
      height='80%'
      width='80%'
      data-aos='zoom-in'
      onLoad={() => setIsIframeLoading(false)}
    />
  );
};

export default InteractiveIframe;
