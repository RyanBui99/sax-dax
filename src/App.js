import './App.scss'
import React, { useState, useEffect } from 'react'
import NavBar from './conponents/navbarFolder/NavBar.jsx'
import {Route, Switch} from 'react-router-dom'
import Homepage from './conponents/sectionsFolder/Homepage'
import Contact from './conponents/sectionsFolder/Contact'
import Booking from './conponents/sectionsFolder/Booking'
import LoadingScreen from './conponents/LoadingScreen.jsx'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App">
        <NavBar />

          <main>
            <Switch>
              <Route path='/' component={Homepage}  />
              <Route path='/Kontakt'component={Contact}  />
              <Route path='/Boka' component={Booking}  />
            </Switch>
          </main>
      </div>
      ) : (
        <LoadingScreen />
      )}
  </>
  )
}

export default App;
