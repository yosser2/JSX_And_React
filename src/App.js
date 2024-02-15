import React from 'react'
import TopNavbar from './TopNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Movies from './Movies';

function App() {
  return (
    <>
      <TopNavbar />
      <div className="cards">
        <Movies />
      </div>
      <div className="hello"><img src='https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg' />
</div>
    </>
  )
}

export default App