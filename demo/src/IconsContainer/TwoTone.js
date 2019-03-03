import React from 'react';
import * as Icons from 'material-icons-two-tone';
import IconsGrid from '../components/IconsGrid';
import Install from '../components/Install/Install';

export default props => (
  <>
    <Install library="material-icons-two-tone" />
    <IconsGrid icons={Icons} {...props} library="material-icons-two-tone" />
  </>
);
