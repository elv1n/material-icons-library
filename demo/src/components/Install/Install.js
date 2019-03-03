import React, { useState } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@material-ui/core/es/Tooltip/Tooltip';

const styles = theme => ({
  root: {
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing.unit,
    fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace'
  }
});

function Install({ library, classes }) {
  const [copied, setCopied] = useState(false);
  const closeWithTimeout = () => setTimeout(() => setCopied(false), 300);

  const title = copied ? 'Copied' : 'Copy';
  const text = `yarn add ${library}`;
  return (
    <CopyToClipboard onCopy={() => setCopied(true)} text={text}>
      <Tooltip onClose={closeWithTimeout} title={title}>
        <Grid item xs={12}>
          <Typography align="center" className={classes.root}>
            {text}
          </Typography>
        </Grid>
      </Tooltip>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(Install);
