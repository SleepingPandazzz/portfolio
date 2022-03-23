import React, { Component } from 'react';
import { Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import DemoDialog from './DemoDialog';

export default class ProjectCard extends Component {
    state = {
        title: this.props.title,
        imageUrl: this.props.imageUrl,
        hasVideo: this.props.hasVideo,
        videoUrl: this.props.videoUrl,
        description: this.props.description,
        technologies: this.props.technologies
    };

    render() {
        return (
            <Cell col={4}>
                <Card shadow={0} style={{ width: '98%', height: '320px', margin: '0 auto' }}>
                    <CardTitle expand style={{ color: '#fff', position: 'relative', backgroundImage: `url(${this.state.imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <p style={{ background: 'rgba(0,0,0,0.6)', padding: '1px 5px', position: 'absolute', bottom: '0' }}>
                            {this.state.title}
                        </p>
                    </CardTitle>
                    <CardText style={{ color: '#000000' }}>
                        Technologies: {this.state.technologies}
                    </CardText>
                    <CardActions border>
                        <DemoDialog title={this.state.title} imageUrl={this.state.imageUrl} 
                            hasVideo={this.state.hasVideo} videoUrl={this.state.videoUrl}
                            description={this.state.description} technologies={this.state.technologies} />
                    </CardActions>
                </Card>
            </Cell>
        );
    }
}