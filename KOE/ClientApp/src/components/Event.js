import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "../styles/event.css";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { sizing } from "@material-ui/system";

class Event extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      time: this.props.time,
      time_passed: false,
      selectedDate: Date.now()
    };
    //bindings
    this.renderEvent = this.renderEvent.bind(this);
    this.renderPeopleAttendingEvent = this.renderPeopleAttendingEvent.bind(
      this
    );
    this.checkTimer = this.checkTimer.bind(this);
    this.ButtonJoinClicked = this.ButtonJoinClicked.bind(this);
    this.renderDateTime = this.renderDateTime.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.renderDescriptionSection = this.renderDescriptionSection.bind(this);
    //refs
    //this.DateRef = React.createRef();
  }

  // lifcycle functions
  componentDidMount() {
    this.checkTimer();
  }

  checkTimer() {
    this.DateTimer = setInterval(() => {
      // Time kada se prosledi kao props mora da se prosledi kao : Number(slektovane vrednosti iz komponente DateTimerPicker)
      if (Date.now() >= this.state.time) {
        clearInterval(this.DateTimer);
        this.setState({ time_passed: true });
      }
    }, 10000);
  }
  // handlers
  ButtonJoinClicked() {
    //console.log(this.DateRef.current);
    if (Number(this.state.selectedDate) > Number(this.state.time)) {
      console.log("Vece je novo vreme od props");
    } else {
      console.log(" SELECTED DATE : ");
      console.log(this.state.selectedDate);
      console.log(Number(this.state.selectedDate));
      console.log(" PORPS DATE : ");
      console.log(this.state.time);
      console.log(Number(this.state.time));
    }
  }
  handleDateChange(date) {
    this.setState({ selectedDate: date });
  }

  //render functions
  renderPeopleAttendingEvent() {
    return (
      <div clasName="peopleAttendingEvent">
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg/1200px-Henry_Cavill_by_Gage_Skidmore_2.jpg"
        />
      </div>
    );
  }
  renderDateTime() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Sing up due in:"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
  renderDescriptionSection() {
    const useStyles = makeStyles({
      root: {
        maxWidth: 345
      }
    });
    return (
      <Card className={useStyles.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Paper
              elevation={3}
              children={this.renderPeopleAttendingEvent()}
              width={200}
            />
          </CardContent>
          <CardContent>
            {this.state.time_passed === true ? (
              <Typography variant="body2" color="textSecondary" component="p">
                Chat!!
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary" component="p">
                Timer : {this.state.time}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  renderEvent() {
    return (
      <div className="event">
        <div className="eventBody">
          <div className="eventDescription">
            {this.renderDescriptionSection()}
            <Button
              variant="contained"
              color="primary"
              onClick={this.ButtonJoinClicked}
            >
              Join
            </Button>
          </div>
        </div>
        {/*this.renderDateTime() */}
      </div>
    );
  }
  render() {
    return (
      <div className="eventWraper">
        <Paper elevation={3} children={this.renderEvent()} />
      </div>
    );
  }
}

export default Event;
