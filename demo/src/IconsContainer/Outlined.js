import React from 'react';
import * as Icons from 'material-icons-library';
import IconsGrid from '../components/IconsGrid';
import Install from '../components/Install';

export default props => (
  <>
    <Install library="material-icons-library" />
    <IconsGrid icons={Icons} {...props} library="material-icons-library" />
  </>
);
