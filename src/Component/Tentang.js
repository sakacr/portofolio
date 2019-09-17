import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
//mengimport grid, cell, list, list item, list item content dari react-mdl

class Tentang extends Component {
  render() {
    return(
      <div className="content-body">
        {/*membuat grid untuk layout dari kontak.js */}
        <Grid className="content-grid2">
          {/*mengatur ukuran kolom grid */}
        <Cell col={12}>
          {/*menampilkan gambar dari file img */}
            <img
              src={require("./img/profile.jpg")}
              alt="avatar"
              className="avatar-img"
               />
          <h4>Candra Saka Rahardian</h4>
          <hr style={{borderTop: '3px solid #a4c323'}}/>
          <p>Alamat: Jalan Danau Semayang</p>
          <p>Phone: 081334105103</p>
          <p>Email: candra_saka_27rpl@student.smktelkom-mlg.sch.id</p>
          <p>Web: http://smktelkom.sch.id</p>
        </Cell>
        </Grid>

        <Grid className="content-grid2">
          {/*mengatur ukuran kolom grid */}
        <Cell col={7}>
          <h3>Pendidikan</h3>
          <hr/>
          {/*membuat list teks tentang saya */}
          <div className="content-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  2015 - 2018 : SMPN 2 Jombang
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  2018 - now  : SMK Telkom Malang
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>

        {/*mengatur ukuran kolom grid */}
        <Cell col={5}>
            <h3>Pengalaman</h3>
            <hr/>
            {/*membuat list teks tentang saya */}
            <div className="content-list">
               <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    2018 : Masuk SMK Telkom Malang
                  </ListItemContent>
                </ListItem>
               </List>
               </div>
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default Tentang;
