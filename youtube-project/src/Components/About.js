import React from 'react'

export default function About() {
    return (
        <div>
            <div className="ProjectDes">
                <h1>PROJECT DESCRIPTION</h1>
                <p>This Youtube clone is built with love and React. It is a group project that allowed us to strengthen our communication and problem-solving skills. Youtube is a worldwide application that is filled with large amounts of data. We were able to learn how to grab specific information in the API call and hide the API key using .env. This is immportant to ensure company's information security. We used React to create this clone which is a Javascript Library used worldwide by a community of developers. One of our biggest challenges we faced were calling the Youtube video links to our website but with research and persistance we succeeded in attaining that information. We are proud to say this application has taught us alot of what it's like to pair program in the tech workforce.</p> 
            </div>
            
            <div className="AboutMe">
                <div className="Jenna">
                    <h1>Jenna Qian</h1>
                    <img src="https://i.imgur.com/fgUMYvO.jpg" alt="Jenna" style={{height:"300px"}}/>
                    <div>
                        <p>Born in China, raised and living in New York City.</p>
                        <p>Growing up, I've always been fasinated by tech gadgets, but the lack of exposure and the idea of IT being traditionally male dominated, it led me to believing that route was not for me. Fast forward to now, technology is a necessity in the 21st century, from navigation to finding the next 5-star Yelp meal. This sparked my interest and motivated me to have a career change. I am currently pursuing a 12-month, Google-funded software engineering fellowship in hopes of creating interactive websites and apps to improve my community. By learning and understanding tech myself, I can better explain and teach it to those around me as well.</p>
                    </div>
                    <a href="https://github.com/jennaqian"><img className="GithubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/></a>
                </div>

                <div className="Yesi">
                    <h1>Yesenia Lopez</h1>
                    <img src="https://storage.cloudconvert.com/tasks/4cc99e1a-c4b7-42f7-adb9-6b6448f3178d/E1FB2960-AF16-4740-8141-319062737E46.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1621960963&Signature=kLwYCy7F3dfkhEdL%2BuPr0UmWb70%3D&response-content-disposition=inline%3B%20filename%3D%22E1FB2960-AF16-4740-8141-319062737E46.jpg%22&response-content-type=image%2Fjpeg" alt="Yesi" style={{height:"300px"}}/>
                    <p>I am Mexican-American, born and raised in Brooklyn, NY.</p>
                        <p> As a first generation American, it was difficult to understand the possibilities and career options out there. I went to college, got my degree and then was stuck in what to do next. No one in my network had careers in tech and so I never would have thought I would be here, learning how to code to become a Software Engineer. I am so grateful to be part of the tech community to pave a way to more diverse communities. I aspire to innovate and lead a new generation of tech by learning and challenging myself everyday. My main passion right now is UI/UX design and can't wait to put companies visions into reality. </p>
                    <a href="https://github.com/ylopez25"><img className="GithubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/></a>
                </div>
            </div>
        </div>
    )
}
