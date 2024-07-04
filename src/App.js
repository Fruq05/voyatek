import React from 'react'
import Main from './Pages/Main'
import Settings from './Pages/Settings'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/settings' Component={Settings} />
        <Route path='/add' Component={Add} />
        <Route path='/edit' Component={Edit} />
      </Routes>
    </div>
    </Router>
  )
}

export default App