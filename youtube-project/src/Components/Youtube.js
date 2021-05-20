import React, { Component } from 'react';
import axios from 'axios'

export default class Youtube extends Component {
    constructor() {
        super()
        this.state = {
            links: [],
            input: "",
        }
    }

    componentDidMount() {
        this.getVideos();
    }

    getVideos = async () => {
        console.log(process.env.REACT_APP_keyAPI)
        const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_keyAPI }`)
        this.setState ({
            link : data.items[0]
        })
        console.log(this.state.link)
    }

    // handleChange = (event) => {
    //     this.setState({
    //         input: event.target.value,
    //     })
    //     console.log(this.state.input)
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     // this.setState({

    //     // })
    // }

    render() {
        return (
            <div>
                <h1>This is a search</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} className="Input" placeholder="Search here..."/>
                    <button className="Button">Search</button>
                </form>

                <ul>

                </ul>
            </div>
        )
    }
}
