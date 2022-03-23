import React from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import './App.css';
import Main from './pages/main';

function App() {
  return (
    <div>
      <Layout style={{background: 'url(https://images.pexels.com/photos/7048694/pexels-photo-7048694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover'}}>
          <Header transparent>
              <Navigation className="nav-style">
                <Link to="/portfolio">HOME</Link>
                <Link to="/projects">PROJECTS</Link>
              </Navigation>
          </Header>
          <Content>
            <div className="page-content"></div>
            <Main />
          </Content>
      </Layout>
  </div>
  );
}

export default App;
