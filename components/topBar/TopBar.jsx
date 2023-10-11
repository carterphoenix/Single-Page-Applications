import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@mui/material';
import './TopBar.css';

/**
 * Define TopBar, a React component for Project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userName, pageTitle } = this.props; // Assuming you receive these as props

    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6" color="inherit">
                {userName}'s Photo Sharing
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="inherit">
                {pageTitle}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;

