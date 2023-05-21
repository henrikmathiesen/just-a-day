import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="container d-flex flex-column">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
