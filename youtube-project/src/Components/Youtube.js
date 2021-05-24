import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Youtube extends Component {
  constructor() {
      super();
      this.state = {
        input: "",
        videos: [],
      };
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      const key = process.env.REACT_APP_keyAPI;
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
      this.setState({ input: e.target.value });
    };
  
    render() {
      const { input, videos } = this.state;
      const videoList = videos.map((video) => {
        return (
          <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
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
          <section>
            {/* { this.handleChange ? videoList: 'no videos'} */}
              {videoList}
          </section>
        </div>
      );
    }
  }
  
