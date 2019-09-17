import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl'; //mengimport grid dan cell dari react-mdl

class Karya extends Component {
  render() {
    return(
      <div className="content-body">
        {/*membuat grid untuk layout dari karya.js */}
        <Grid className="content-grid5">
        {/*mengatur ukuran kolom grid */}
        <Cell col={12}>
          <h3>Karya</h3>
          <hr /><br />

          {/*mengatur ukuran kolom grid */}
            <div className="projects-grid">
              {/*mengatur ukuran card shadow */}
            <Card shadow={5} 
            /*mengatur ukuran gambar */
                style={{width: '256px', 
                    textAlign:"center",
                    height: '380px', 
                    /*memberi gambar dari url */
                    background: 'url(http://www.bukulokomedia.com/jalan-pintas-php.jpg) center / cover', 
                    marginBottom: "25px"
                    }}>
          </Card>
            <Card shadow={5} 
                style={{width: '256px', 
                    textAlign:"center",
                    height: '380px', 
                    background: 'url(http://www.bukulokomedia.com/rahasia-php.jpg) center / cover', 
                    marginBottom: "25px"
                    }}>
          </Card>
        </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Karya;
