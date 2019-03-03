import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const iconStyles = theme => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.grey[200]
    }
  }
});

const IconView = withStyles(iconStyles)(
  ({ name, classes, onCopy, library, Component }) => (
    <CopyToClipboard
      onCopy={() => onCopy(name)}
      text={`import { ${name} } from '${library}';`}
    >
      <Grid className={classes.root} item md={2}>
        <Typography align="center">
          <Component color="#282c34" fontSize={40} />
          <Typography noWrap variant="caption">
            {name}
          </Typography>
        </Typography>
      </Grid>
    </CopyToClipboard>
  )
);

function IconsGrid({ icons, filter, onCopy, library }) {
  const keys = Object.keys(icons);
  const filteredKeys = filter
    ? keys.filter(i => i.toLowerCase().includes(filter))
    : keys;
  return filteredKeys.map(key => (
    <IconView
      Component={icons[key]}
      key={key}
      library={library}
      name={key}
      onCopy={onCopy}
    />
  ));
}

export default IconsGrid;
