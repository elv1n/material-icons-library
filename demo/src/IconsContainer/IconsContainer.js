import React, { lazy, Suspense, memo } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

const containers = {
  0: lazy(() => import('./Outlined')),
  1: lazy(() => import('./TwoTone'))
};

function IconsContainer({ value, ...rest }) {
  const Container = containers[value];

  return (
    <>
      <Suspense
        fallback={
          <Grid alignItems="center" container>
            <Grid item md={12}>
              <Typography align="center" component="div">
                <CircularProgress />
              </Typography>
            </Grid>
          </Grid>
        }
      >
        <Container {...rest} />
      </Suspense>
    </>
  );
}

export default memo(IconsContainer);
