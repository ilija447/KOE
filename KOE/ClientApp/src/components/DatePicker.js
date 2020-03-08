import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 200
  }
}));

export default function DateAndTimePickers() {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Pick the time till which people can sign up for "
        type="datetime-local"
        defaultValue="1970-02-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
