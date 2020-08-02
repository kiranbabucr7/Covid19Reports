import React from 'react';
import './styles/App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer> 
    </div>
    </Container>
  );
}

export default App;
