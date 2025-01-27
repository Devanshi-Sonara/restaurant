import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />

    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;