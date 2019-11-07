import React, {Component} from 'react';
import Header from './Header/Header';
import Contenido from './Contenido/Contenido';
import Footer from './Footer/Footer';

class Dashboard extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Header />
        <Contenido />
        <Footer />
      </div>
    );
  }
}
 
export default Dashboard;