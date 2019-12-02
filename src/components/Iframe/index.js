import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
    height: `calc(100vh - 48px - ${theme.spacing.unit * 2}px)`,
    overflow: "hidden"
  },
  iframe: {
    marginTop: "-40px",
    height: "calc(100% + 100px)"
  }
});

function Iframe(props) {
  const { classes } = props;
  return (
    <div className={classes.card}>
      <iframe
        src={props.page}
        width="100%"
        className={classes.iframe}
        frameborder="0"
        X-FrameOptions="sameorigin"
      ></iframe>
    </div>
  );
}

export default withStyles(styles)(Iframe);
