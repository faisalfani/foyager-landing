import React from 'react';
import LazyComponent from '@/components/LazyComponent';
import LoadingIndicator from '@/components/LoadingIndicator';

const HomePage = React.lazy(() => import('./index.jsx'));

const HomePageLazy = (props) => (
  <LazyComponent
    component={<HomePage {...props} />}
    loader={<LoadingIndicator />}
  />
);

export default HomePageLazy;
