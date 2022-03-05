import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyComponent = (props) => (
  <Suspense fallback={props.loader}>{props.component}</Suspense>
);

LazyComponent.propTypes = {
  component: PropTypes.node.isRequired,
  loader: PropTypes.node,
};

export default LazyComponent;
