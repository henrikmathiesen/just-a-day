import { useState } from 'react';

import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {

  const [view, setView] = useState('Blog');
  const handleChangeViewClick = (v) => setView(v);

  return (
    <div className="container d-flex flex-column">
      <Header />
      <Nav handleChangeViewClick={handleChangeViewClick} />
      <Main view={view} />
      <Footer />
    </div>
  );
}

export default App;
