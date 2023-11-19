import { useState } from 'react';

import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {

  const [view, setView] = useState('Blog');
  const [idToEdit, setIdToEdit] = useState(0);

  return (
    <div className="container d-flex flex-column">
      <Header />
      <Nav view={view} setView={setView} />
      <Main view={view} setView={setView} setIdToEdit={setIdToEdit} idToEdit={idToEdit} />
      <Footer />
    </div>
  );
}

export default App;
