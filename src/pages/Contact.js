import React, { Component } from 'react';
import { Grid, Cell, Textfield, Button } from 'react-mdl';
import Footer from '../components/Footer';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-background">
                <div style={{ paddingBottom: '30px' }}>
                    <p style={{ textAlign: 'center', paddingTop: '5vh' }}>I would like to here something from you!</p>
                    <form action="mailto:tingtinghe787@gmail.com">
                        <Grid style={{ width: '60%', margin: '0 auto' }}>
                            <Cell col={12}>
                                <Textfield
                                    onChange={() => { }}
                                    label="First name..."
                                    floatingLabel
                                    style={{ width: '60vw' }}
                                />
                            </Cell>
                            <Cell col={12}>
                                <Textfield
                                    onChange={() => { }}
                                    label="Last name..."
                                    floatingLabel
                                    style={{ width: '60vw' }}
                                />
                            </Cell>
                            <Cell col={12}>
                                <Textfield
                                    onChange={() => { }}
                                    label="Message..."
                                    rows={3}
                                    expandableIcon="search"
                                    style={{ width: '60vw' }}
                                />
                            </Cell>
                            <Cell col={12}>
                                <Button raised colored style={{ width: '60vw', paddingBottom: '3vh' }}>SEND MESSAGE</Button>
                            </Cell>
                        </Grid>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}