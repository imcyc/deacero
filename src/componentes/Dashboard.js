import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Dashboard extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}
 
export default Dashboard;