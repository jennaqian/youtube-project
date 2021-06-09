import React, { Component } from "react";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import {uuid} from "uuidv4";

export class Video extends Component {
  constructor() {
    super();

    this.state = {
      input: "", // consider renaming to be more descriptive. Something like 'firstName'
      comment: "",
      inputAndComment: [],
    };
  }

  // handleInput and handleText can be combined into a single method.
  // instead of { input: e.target.value }, you can use { [e.target.name]: e.target.value }
  // To make this work, pass the 'name' prop to each of your input tags.
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
      input: "",
      comment: "",
      inputAndComment: this.state.inputAndComment.concat([
        {
          name: this.state.input,
          comment: this.state.comment,
          id : uuid(), // nice use of uuid!
        },
      ]),
    });
  };

  handleDelete = (obj) => {
    console.log(obj);

    let filterObj = this.state.inputAndComment.filter(
      (item) => item.id !== obj
    );
    this.setState({
      inputAndComment: filterObj,
    });
  };

  render() {
    const { inputAndComment } = this.state;
    // The key you pass below shouldn't be a username because the same user might make multiple comments!
    // To keep the key's unique, use obj.id
    // We know each obj.id is unique since you used the uuid library!
    let inputAndCommentList = inputAndComment.map((obj, i) => (
      <li key={obj.name} index={i} value={i}>
        Name: {obj.name} <br></br>
        Comment:{obj.comment} {"   "}
        <button onClick={() => this.handleDelete(obj.id)} className="DeleteButton">Delete</button>
        <hr></hr>
      </li>
    ));
    // This will make the youtube player less responsive - it won't resize on mobile.
    // Use a css class to apply responsive styling rather than applying inline styles with opts.
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div>
        <div>
      {/* Please don't use br tags! Use css to space things the way you want them! */}
          <br />
          <Youtube
            videoId={this.props.match.params.id}
            opts={opts}
            onReady={this._onReady}
          />
          <br></br>
          <Link to="/">
            <button className="SearchButton">Search</button>
          </Link>
        </div>

        <hr></hr>

        <div className="CommentSection">
          <div className="CommentForm">
            <h2>Comment Form:</h2>
            <form onSubmit={this.handleSubmit}>
              {/* labels should be given an htmlFor prop */}
              <label>Name:</label>
              <br></br>
              <input
                type="text"
                className="CommenterName"
                onChange={this.handleInput}
                value={this.state.input}
                placeholder="Enter your name..."
              ></input>
              <br></br>
              <label>Comment:</label>
              <br></br>
              <textarea
                type="text"
                onChange={this.handleText}
                className="CommentArea"
                value={this.state.comment}
                placeholder="Type your comment here..."
              ></textarea>
              <br></br>
              <input type="submit" className="SubmitButton"></input>
            </form>
          </div>

          <div>
            <ul className="UList">
              <h2>Comments:</h2>
              {inputAndCommentList}
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
