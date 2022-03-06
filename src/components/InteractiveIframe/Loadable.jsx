import React from 'react';
import LazyComponent from '@/components/LazyComponent';
import LoadingIndicator from '@/components/LoadingIndicator';

const InteractiveIframe = React.lazy(() => import('./index.jsx'));

const IframeLazy = (props) => (
  <LazyComponent
    component={<InteractiveIframe {...props} />}
    loader={<LoadingIndicator />}
  />
);

export default IframeLazy;
