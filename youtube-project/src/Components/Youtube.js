import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Video from './Components/Video'

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
        // ('No Videos')
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
            
            <li className="list-item">
              <img
                src={video.snippet.thumbnails.default.url}
                style={{ height: "100px", width: "150px" }}
                alt={video.snippet.description}
              />
              <h3>{video.snippet.title}</h3>
            </li>
          </Link>
        );
      });
  
      return (
        <div>
          <form className="search" onSubmit={this.handleSubmit}>
            <h1>Search Youtube Video</h1>
            <input
              onChange={this.handleChange}
              value={input}
              type="text"
              placeholder="search..."
              className="search"
            />
            <button>Search</button>
          </form>
          <section>
           {/* <ul> */}

             { this.handleSubmit ? videoList : 'No videos'}
             {/* </ul>   */}
          </section>
        </div>
      );
    }
  }
  
