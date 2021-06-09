import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      videos: [],
      // I don't think showVid is necessary. Could you use this.state.videos.length to determine whether to display videos?
      // An important part of thinking in react is only creating new state variables when you absolutely need them!
      showVid: false, 
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const key = process.env.REACT_APP_keyAPI; // Follow conventions: you should name your env vars with ALL_CAPS
    const search = this.state.input;

    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${key}&type=video&q=${search}`
      );

      this.setState({
        videos: data.items,
        input: "",
       
      });
    } catch {
      console.log("error");
    }
  };

  handleChange = (e) => {
    // This makes the 'no videos to show' message dissappear the moment I start typing
    // into the input. Is that your desired behavior?
    this.setState({ input: e.target.value,  showVid: true });
  };

  render() {
    const { input, videos } = this.state;
    const videoList = videos.map((video) => {
      return (
        <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
          {/* 
            Each thumbnail will be inside a different ul component.
            I'd recommend returning something like <li key={}><Link>...</Link></li>
            and then replacing your <section> tag with a <ul> in the return statement for render.
            That way, each list item is part of the same ul!
          */}
          <ul className="Results">
            <li>
              <h3>{video.snippet.title}</h3>
              <img
                src={video.snippet.thumbnails.default.url}
                style={{ height: "100px", width: "150px" }}
                alt={video.snippet.description}
              />
            </li>
          </ul>
        </Link>
      );
    });

    return (
      <div className="HomePage">
        <form onSubmit={this.handleSubmit}>
          <h1>Search Youtube Video</h1>
          <input
            onChange={this.handleChange}
            value={input}
            type="text"
            placeholder="Search here..."
            className="SearchInput"
          />
          <button className="SearchButton">Search</button>
        </form>
        <section>{this.state.showVid ? videoList : "No videos"}</section>
      </div>
    );
  }
}


