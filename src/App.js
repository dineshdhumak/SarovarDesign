import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import Page3 from './Pages/Page3.js'



function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <ButtonAppBar/>     
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/page3'}  > <Page3/> </Route>
            
          </Switch>
          <br />

      <footer className="App-footer">
        
        <table width="100%">
          <tr><td><h3><u>CONTACT US</u></h3></td><td><h3><u>SERVICES</u></h3></td><td><h3><u>INFORMATION</u></h3></td><td><h3><u>DEALS & BOOKINGS</u></h3></td></tr>
          <tr><td>+44 345 678 903</td><td>Contact us</td><td>About Sarovar</td><td>My Booking</td></tr>
          <tr><td>sarovar@gmail.com</td><td>Booking and payment</td><td>Sign Up</td><td>My Deal</td></tr>
          <tr><td>Book a hotel</td><td>Destination</td><td>Privacy Policy</td><td>Festival offers</td></tr>
          <tr><td></td><td>Rooms</td><td>Terms and Condition</td><td>Upcomming Deals</td></tr>
          <tr><td></td>FAQ<td></td><td>Press Enquiries</td><td></td></tr>
        </table>
        <hr />
        Copyright@SarovaDesign
        <hr />
      </footer>
    </div>
  );
  }

export default App;
