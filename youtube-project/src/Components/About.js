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
                    <img src="https://i.imgur.com/1zjVOT7.jpg" alt="Jenna" style={{height:"150px"}}/>
                    <div>
                        <p>Born in China, raised and living in New York City.</p>
                        <p>Growing up, I've always been fasinated by tech gadgets, but the lack of exposure and the idea of IT being traditionally male dominated, it led me to believing that route was not for me. Fast forward to now, technology is a necessity in the 21st century, from navigation to finding the next 5-star Yelp meal. This sparked my interest and motivated me to have a career change. I am currently pursuing a 12-month, Google-funded software engineering fellowship in hopes of creating interactive websites and apps to improve my community. By learning and understanding tech myself, I can better explain and teach it to those around me as well.</p>
                    </div>
                    <a href="https://github.com/jennaqian"><img className="GithubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/></a>
                </div>

                <div className="Yesi">
                    <h1>Yesenia Lopez</h1>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEEFkYspUWizw/profile-displayphoto-shrink_800_800/0/1522974214294?e=1621468800&v=beta&t=RboItWRsaHnfUZ9nxKkE0u6Fn7FpA8EighTnI_eMiho" alt="Yesi" style={{height:"150px"}}/>
                    <p>I am Mexican-American, born and raised in Brooklyn, NY. As a first generation American, it was difficult to understand the possibilities and career options out there. I went to college, got my degree and then was stuck in what to do next. No one in my network had careers in tech and so I never would have thought I would be here, learning how to code to become a Software Engineer. I am so grateful to be part of the tech community to pave a way to more diverse communities. I aspire to innovate and lead a new generation of tech by learning and challenging myself everyday. My main passion right now is UI/UX design and can't wait to put companies visions into reality. </p>
                    <a href="https://github.com/ylopez25"><img className="GithubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/></a>
                </div>
            </div>
        </div>
    )
}
