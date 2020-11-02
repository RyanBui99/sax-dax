import './App.css'
import React from 'react'
import NavBar from './conponents/navbarFolder/NavBar.jsx'
import {Route, Switch} from 'react-router-dom'
import Homepage from './conponents/sectionsFolder/Homepage'
import Contact from './conponents/sectionsFolder/Contact'
import Booking from './conponents/sectionsFolder/Booking'

function App() {
  return (
    <div className="App">
      <NavBar />

        <main>
          <Switch>
            <Route path='/' exact component={Homepage} title='Home'/>
            <Route path='/Kontakt'component={Contact} title='Kontakt'/>
            <Route path='/Boka' component={Booking} title='Boka'/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
