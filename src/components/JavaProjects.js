import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import ProjectCard from './ProjectCard';

export default class JavaProject extends Component {
    state = {
        projects: [
            {
                id: 0,
                title: "Space Asteroid Mobile Game",
                imageUrl: require('./assets/asteroidGame.jpg'),
                videoUrl: require('./assets/spaceGame.mp4'),
                hasVideo: 'true',
                technologies: "Java, OOP, Codename One",
                description: "Developed a 2D space asteroids mobile game using Object-Oriented Programming Concepts to model functional 2D computer graphics, such as spaceships and asteroids.",
            },
            {
                id: 1,
                title: "3D Game",
                imageUrl: require('./assets/3DGame.jpg'),
                videoUrl: '',
                hasVideo: 'false',
                technologies: "Java, OpenGL, JOGL, JBullet, JOAL",
                description: "Developed a 3D game using Java, RAGE (Rockstar Advanced Game Engine), JavaScript, Maya, Photoshop, Blender, Photoshop, and implemented a multi-player functionality using UDP (User Datagram Protocol). The objective of the game is to control the player to survive in a certain time.",
            },
            {
                id: 2,
                title: "Multi-player Dolphin Game",
                imageUrl: require('./assets/dophinGame.jpg'),
                videoUrl: '',
                hasVideo: 'false',
                technologies: "Java, OpenGL, JOGL, JBullet, JOAL",
                description: ""
            },
            {
                id: 3,
                title: "Tetrisblok Game",
                imageUrl: require('./assets/tetrisblokGame.jpg'),
                videoUrl: '',
                hasVideo: 'false',
                technologies: "Java",
                decsription: ""
            },
            {
                id: 3,
                title: "Sound Reverse",
                imageUrl: "data:image/jpeg;base64,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",
                videoUrl: '',
                hasVideo: 'false',
                technologies: "Technologies: Java",
                description: ""
            }
        ]
    }
    render() {
        return (
            <Grid>
                {this.state.projects.map(project => (<ProjectCard key={project.id} title={project.title}
                    imageUrl={project.imageUrl} hasVideo={project.hasVideo} videoUrl={project.videoUrl} 
                    description={project.description} technologies={project.technologies} />))}
            </Grid>
        );
    }
}