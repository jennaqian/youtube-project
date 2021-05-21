import React, { Component } from "react";
// import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player/youtube";
import Youtube from 'react-youtube'

export class Video extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      comment: "",
      // inputAndComment: [],
      inputs: [],
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
      // inputAndComment: this.state.input.concat(this.state.comment)
      inputs: this.state.inputs.concat(this.state.input),
      comments: this.state.comments.concat(this.state.comment),
    });
    event.target.reset();
  };

  render() {
    const { inputs, comments } = this.state;
    let inputsList = inputs.map((e) => <li>{e}</li>);
    let commentsList = comments.map((e) => <li>{e}</li>);

    // const {} = this.props

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };
    return (
     
      <div>
        <div>
          <br />
      <Youtube videoId={`https://www.youtube.com/watch?v=${this.props.match.params.id}`} opts={opts} onReady={this._onReady} />
          <Link to="/">
            <button>Search</button>
          </Link>
        </div>

        <hr></hr>

        <div className="CommentSection">
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

          <div>
            <ul className="UList">
              <h3>Comments:</h3>
              Name: {inputsList}
              Comment: {commentsList}

            </ul>
          </div>
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Video;
