import React from 'react';
import PropTypes from 'prop-types';
import { DefaultLayout } from 'components/LayoutStyle';

const Main = props => {
  const { children } = props;
  return (
    <DefaultLayout>
      <main>{children}</main>
    </DefaultLayout>
  );
};

Main.propTypes = { children: PropTypes.node.isRequired };

export default Main;