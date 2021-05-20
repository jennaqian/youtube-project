import React from 'react'

export default function About() {
    return (
        <div>
            <div className="ProjectDes">
                <h1>PROJECT DESCRIPTION</h1>
                <p>This Youtube clone is built with love and React</p>
            </div>
            
            <div className="AboutMe">
                <div className="Jenna">
                    <h1>Jenna Qian</h1>
                    <div>
                        <p>Born in China, raised and living in New York City.</p>
                        <p>Growing up, I've always been fasinated by tech gadgets, but the lack of exposure and the idea of IT being traditionally male dominated, it led me to believing that route was not for me. Fast forward to now, technology is a necessity in the 21st century, from navigation to finding the next 5-star Yelp meal. This sparked my interest and motivated me to have a career change. I am currently pursuing a 12-month, Google-funded software engineering fellowship in hopes of creating interactive websites and apps to improve my community. By learning and understanding tech myself, I can better explain and teach it to those around me as well.</p>
                    </div>
                    <a href="https://github.com/jennaqian"><img className="GithubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/></a>
                </div>

                <div className="Yesi">
                    <h1>Yesenia Lopez</h1>
                    <p>I am Software Developer that has built applications using React, Vanilla Javascript  </p>
                    <a href="https://github.com/ylopez25"><img className="GithubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/></a>
                </div>
            </div>
        </div>
    )
}
