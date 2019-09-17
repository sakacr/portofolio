import React, { Component } from 'react';
import './App.css';
import Utama from './Component/Utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        {/* membuat layout yang ditampilkan */}
          <Layout>
            {/* membuat navbar */}
              <Header className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to="/Beranda">Beranda</Link>
                      <Link to="/Tentang">Tentang </Link>
                      <Link to="/Karya">Karya</Link>
                      <Link to="/Kontak">Kontak</Link>
                  </Navigation>
              </Header>
              {/* membuat sidebar */}
              <Drawer title="Portfolio">
                  <Navigation>
                  <Link to="/Beranda">Beranda</Link>
                  <Link to="/Tentangsaya">Tentang </Link>
                  <Link to="/Karya">Karya</Link>
                  <Link to="/Kontak">Kontak</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                  <Utama />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
