import React, { Component, Suspense, lazy } from 'react';
import {
  withStyles,
  AppBar,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Snackbar,
  Tabs,
  Tab,
  TextField,
  Typography,
  Toolbar
} from '@material-ui/core';

import GridContainer from './components/GridContainer';
import IconsContainer from './IconsContainer';

const styles = ({ spacing: { unit } }) => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0
    }
  },
  appBar: {
    marginBottom: unit * 2
  },
  search: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  container: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    '@media (min-width: 576px)': {
      maxWidth: '540px'
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    }
  }
});

class App extends Component {
  state = {
    filter: '',
    tab: 0,
    open: false,
    icon: null
  };

  onCopy = icon => this.setState({ icon, open: true });

  render() {
    const { classes } = this.props;
    const { open, icon, filter, tab } = this.state;

    return (
      <>
        <AppBar className={classes.appBar} color="default" position="static">
          <Toolbar>
            <Typography color="inherit" variant="h6">
              material-icons-library
            </Typography>
            <div className={classes.grow} />
            <Button
              color="inherit"
              href="https://github.com/elv1n/material-icons-library"
              target="_blank"
            >
              Github
            </Button>
            <Button
              color="inherit"
              href="https://icons.pixsellz.io/"
              target="_blank"
            >
              Credits
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <GridContainer justify="center" spacing={16}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                className={classes.search}
                onChange={({ target: { value } }) =>
                  this.setState({ filter: value })
                }
                placeholder="Search icons"
                value={filter}
              />
            </Grid>
            <Grid className={classes.appBar} item md={12}>
              <Paper className={classes.root}>
                <Tabs
                  centered
                  indicatorColor="primary"
                  onChange={(e, tab) => this.setState({ tab })}
                  textColor="primary"
                  value={tab}
                >
                  <Tab label="Outlined" />
                  <Tab label="Two tone" />
                </Tabs>
              </Paper>
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <Grid container spacing={16}>
                <IconsContainer
                  filter={filter}
                  onCopy={this.onCopy}
                  value={tab}
                />
              </Grid>
            </Grid>
          </GridContainer>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          autoHideDuration={2000}
          ContentProps={{
            'aria-describedby': 'copy-icon'
          }}
          message={
            <span id="copy-icon">Import for icon {icon} saved to buffer</span>
          }
          onClose={() => this.setState({ open: false })}
          open={open}
        />
      </>
    );
  }
}

export default withStyles(styles)(App);
