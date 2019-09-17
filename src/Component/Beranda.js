import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; //mengimport grid dan cell dari react-mdl

class Beranda extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        {/*membuat grid untuk layout dari beranda.js */}
        <Grid className="beranda-grid">
        {/*mengatur ukuran kolom grid */}
          <Cell col={12}>
            {/*menampilkan gambar dari file img */}
            <img src={require("./img/profile.jpg")} 
            alt="avatar" 
            className="avatar-img"/>

            {/*membuat teks beranda */}
            <div className="banner-text">
              <h1>Candra Saka Rahardian</h1>
              <hr/>
              <p>Android Developer but learn react</p>
              <div className="social-links">
                {/*memberi link pada icon */}
                <a href="https://www.instagram.com/saka_cr/" 
                rel="noopener noreferrer" target="_blank">
                  {/*menampilkan icon dari fontawesome */}
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://github.com/sakacr" 
                rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github-square" 
                  aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/" 
                rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Beranda;
