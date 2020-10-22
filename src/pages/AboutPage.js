import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Emmanuel. I'm a Game Developer/Software Developer with experience in C#, Java, Express JS, Node JS, Oracle SQL, MongoDB, Unity, Fmod, Python, Microsoft.Net, and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS just to mention a few :)</p>

            <p>You can find my list of projects on, GitHub, You can check it out <a href="https://github.com/Dami908" target="_blank" rel="noopener noreferrer">here</a></p>

            <p>When I'm not learning something new chances are I'm either working on some personal projects or creating some Soundtracks for an amazing company i work with called Treasured inc. You can find those <a href="https://soundcloud.com/treasuredteam" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;