import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import WebProjects from '../components/WebProjects';
import JavaProjects from '../components/JavaProjects';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    getTabContent = () => {
        if (this.state.activeTab === 0) {
            return (
                <JavaProjects />
            );
        } else if (this.state.activeTab === 1) {
            return (
                <WebProjects />
            )
        }
    }

    render() {
        return (
            <div className="projects-background">
                <div className="demo-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>Java</Tab>
                        <Tab>Web</Tab>
                    </Tabs>
                    <section>
                        <div className="demo-content">
                            {this.getTabContent()}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}