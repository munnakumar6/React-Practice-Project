import React, { Profiler } from 'react'
import DataProvider from './Context/ContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
  return (
    <DataProvider>
      <Login/>
      <Profile/>
    </DataProvider>
  
  )
}

export default App