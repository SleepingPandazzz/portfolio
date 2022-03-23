import React, { Component } from 'react';

export default class CVContent extends Component {
    state = {
        id: this.props.id,
        title: this.props.title,
        subtitle: this.props.subtitle,
        subtitleDate: this.props.subtitleDate,
        content: this.props.content
    }

    render() {
        return (
            <div style={{ textAlign: 'left', paddingBottom: '30px' }}>
                <p style={{ fontSize: '22px', fontWeight: '600' }}>{this.state.title}</p>
                <p style={{ fontSize: '15px', color: 'rgb(238,238,238' }}><strong>{this.state.subtitle}</strong> • {this.state.subtitleDate}</p>
                <p style={{ fontSize: '14px', padding: '0 8px;' }}>{this.state.content}</p>
            </div>
        );
    }
}