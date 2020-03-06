import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "../styles/event.css";
import Avatar from "@material-ui/core/Avatar";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    };
    this.renderEvent = this.renderEvent.bind(this);
    this.renderPeopleAttendingEvent = this.renderPeopleAttendingEvent.bind(
      this
    );
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }
  startTimer() {
    this.CreatedTimer = setInterval(
      () => this.setState({ time: this.state.time - 1 }),
      1000
    );
  }
  stopTimer() {
    clearInterval(this.CreatedTimer);
    this.setState({ time: 0 });
    console.log("stop");
  }

  renderEvent() {
    return (
      <div className="event">
        <h4>{this.props.name}</h4>
        {this.state.time == 0 ? (
          <p>Chat!!</p>
        ) : (
          <p>Timer : {this.state.time}</p>
        )}

        <div className="eventBody">
          <div className="eventBody1">
            <Paper
              elevation={3}
              children={this.renderPeopleAttendingEvent()}
              width={200}
            />
          </div>
          <div className="eventDescription">
            <p>{this.props.description}</p>
          </div>
        </div>
        <Button variant="contained" color="primary">
          Join
        </Button>
      </div>
    );
  }
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
  render() {
    return (
      <div className="eventWraper">
        <Paper elevation={3} children={this.renderEvent()} />
        <button onClick={this.startTimer}>start</button>
        <button onClick={this.stopTimer}>Force stop timer</button>
      </div>
    );
  }
}

export default Event;
