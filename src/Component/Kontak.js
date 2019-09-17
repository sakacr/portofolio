import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'; 
//mengimport grid, cell, list, list item, list item content dari react-mdl

class Kontak extends Component {
  render() {
    return(
      <div className="content-body">
        {/*membuat grid untuk layout dari kontak.js */}
        <Grid className="content-grid">
          {/*mengatur ukuran kolom grid */}
        <Cell col={12}>
          <h2>Hubungi Saya</h2>
          <hr/>
          <h3>Candra Saka Rahardian</h3>
          {/*mengatur ukuran konten */}
          <div className="content-list">
            {/*mengatur ukuran list */}
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            <List>
              <ListItem>
                {/*mengatur ukuran list item content */}
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  081334105103
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  candra_saka_27rpl@student.smktelkom-mlg.sch.id
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-globe" aria-hidden="true"/>
                  www.smktelkom.sch.id
                </ListItemContent>
              </ListItem>
            </List>
            </p>
          </div>
        </Cell>

        {/*mengatur ukuran kolom grid */}
        <Cell col={12}>
          {/*mengatur ukuran dan warna garis */}
            <hr style={{width: '90%', borderTop: '5px solid #a4c323'}}/>
            {/*mengatur ukuran list */}
            <p style={{ width: '75%', margin: 'auto', paddingTop: '5px'}}>
            <h3>Alamat Sekolah</h3>             
               <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-globe" aria-hidden="true"/>
                    Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139
                  </ListItemContent>
                </ListItem>
               </List>
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Kontak;
