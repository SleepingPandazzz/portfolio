import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Grid, Cell } from "react-mdl";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner-text">
                    <h1>Hey, I'm Tingting</h1>
                    <Grid>
                        <Cell col={6}>
                            <p>Software Engineer at Redtail Technology, Inc.</p>
                            <p>Currently a software engineer developing Enterprise web applications and web APIs </p>

                            <div style={{ paddingTop: '70px' }}>
                                <a href="https://www.linkedin.com/in/tingting-he787" class="home-icon">
                                    <FontAwesomeIcon className="footer-icon-style fa fa-facebook" icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/SleepingPandazzz/" class="home-icon" >
                                    <FontAwesomeIcon className="footer-icon-style" icon={faGithub} />
                                </a>
                                <a href="tingtinghe787@gmail.com" class="home-icon">
                                    <FontAwesomeIcon className="footer-icon-style" icon={faEnvelope} />
                                </a>
                            </div>
                        </Cell>
                        <Cell col={6}></Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}
