import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import switch dan route dari react-router-dom

import Beranda from './Beranda';
import Tentang from './Tentang';
import Karya from './Karya';
import Kontak from './Kontak';

const Utama = () => (
  //untuk mengatur end point link yang tampil di browser
  <Switch>
    <Route exact path="/" component={Beranda} />
    <Route path="/Beranda" component={Beranda} />
    <Route path="/Tentang" component={Tentang} />
    <Route path="/Karya" component={Karya} />
    <Route path="/Kontak" component={Kontak} />
  </Switch>
)

export default Utama;
