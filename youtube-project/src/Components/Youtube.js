import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Video from './Components/Video'

export default class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      // links: [],
      input: "",
      videos: [],
      show: true,
    };
  }

  componentDidMount() {
    this.getVideos();
  }

  getVideos = async () => {
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=AIzaSyBIMoGD2So7V07NuaeUb56WM_HAdwCaBxQ
    console.log(process.env.REACT_APP_keyAPI);
    // const URL = https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dog&key=${process.env.REACT_APP_keyAPI}`
    );
    
    this.setState({
      videos: data.items,
    });
    console.log(this.state.videos);
  };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    console.log(this.state.input);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getVideos(this.state.input);
    this.setState({
      input: "",
    });
  };

  render() {
    // const {input} = this.state
    return (
      <div>
        <h1>This is a search</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input"></label>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search here..."
            id="input"
            value={this.state.input}
          />
          {/* <button onClick={this.getVideos}>Search</button> */}
          <input type="submit"/>
        </form>
        <main>
          {this.state.show &&
            this.state.videos.map((video, i) => {
              return (
                <Link
                  key={video.id.videoId + i}
                  to={`/video/${video.id.videoId}`}
                >
                  <p>
                    {/* <img src={input.snippet.thumbnails.default.url} alt={ input.snippet.title }/>
          <h4>{input.snippet.title}</h4>   */}
                  </p>
                </Link>
              );
            })}
        </main>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import axios from 'axios'

// export default class Youtube extends Component {
//     constructor() {
//         super()
//         this.state = {
//             links: [],
//             input: "",
//         }
//     }

//     componentDidMount() {
//         this.getVideos();
//     }

//     getVideos = async () => {
//         console.log(process.env.REACT_APP_keyAPI)
//         const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_keyAPI }`)
//         this.setState ({
//             link : data.items[0]
//         })
//         console.log(this.state.link)
//     }

//     // handleChange = (event) => {
//     //     this.setState({
//     //         input: event.target.value,
//     //     })
//     //     console.log(this.state.input)
//     // }

//     // handleSubmit = (event) => {
//     //     event.preventDefault()
//     //     // this.setState({

//     //     // })
//     // }

//     render() {
//         return (
//             <div>
//                 <h1>This is a search</h1>

//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" onChange={this.handleChange} className="Input" placeholder="Search here..."/>
//                     <input type="submit" ></input>
//                 </form>

//                 <ul>

//                 </ul>
//             </div>
//         )
//     }
// }
