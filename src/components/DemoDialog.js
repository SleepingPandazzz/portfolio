import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Cell } from 'react-mdl';


export default class DemoDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      imageUrl: this.props.imageUrl,
      hasVideo: this.props.hasVideo,
      videoUrl: this.props.videoUrl,
      description: this.props.description,
      technologies: this.props.technologies
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>See Details</Button>
        <Dialog open={this.state.openDialog} style={{ width: '60%' }}>
          <DialogTitle>{this.state.title}</DialogTitle>
          <DialogContent>
            <div style={{margin: 'auto' }}>
              <Grid className="demo-grid-ruler">
                <Cell col={6}>
                  {this.state.hasVideo === 'true' ? <video loop autoPlay width='100%'><source src={this.state.videoUrl} type="video/mp4"/></video> : <img src={this.state.imageUrl} alt="img" width="100%" height="100%" /> }
                </Cell>
                <Cell col={6}>
                  <p>{this.state.description}</p>
                  <p>Technologies used: {this.state.technologies}</p>
                </Cell>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}