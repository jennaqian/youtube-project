import React, { Component } from "react";
// import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";

export class Video extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      inputs: [],
      comment: "",
      comments: [],
    };
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleText = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("You submitted");
    this.setState({
   inputs:    this.state.inputs.concat(this.state.input),
      comments: this.state.comments.concat(this.state.comment),
    });
  };

  render() {
    const { inputs, comments } = this.state;
    let inputsList = inputs.map((e) => <li>{e}</li>);
    let commentsList = comments.map((e) => <li>{e}</li>);
    // console.log(commentsList)

    return (
      <div>
        <div>
          <Link to="/">
            <button>Search / Return Home</button>
          </Link>
          <p style={{ height: "200px" }}>
            This is where the video will show up
          </p>
        </div>

        <div>
          <h3>Comment Form</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <br></br>
            <input
              type="text"
              className="CommenterName"
              onChange={this.handleInput}
              placeholder="Enter your name..."
            ></input>
            <br></br>
            <label>Comment:</label>
            <br></br>
            <textarea
              type="text"
              onChange={this.handleText}
              className="CommentArea"
              placeholder="Type your comment here..."
            ></textarea>
            <br></br>
            <input type="submit"></input>
          </form>
        </div>

        <ul className="UList">
          Name: {inputsList}
          Comment: {commentsList}
        </ul>
      </div>
    );
  }
}

export default Video;
