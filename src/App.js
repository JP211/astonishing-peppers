import React, { Component } from 'react';

// Includes
import './Assets/CSS/default.min.css';

// Components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <Homepage />

        <Footer />

      </div>
    );
  }
}

export default App;
