import './App.css';
import Category from './Components/Category/Category';
import Navbar from './Components/Navbar/Navbar';
import Business from './Pages/Business/Business';
import Entertainment from './Pages/Entertainment/Entertainment';
import Health from './Pages/Heath/Health';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Science from './Pages/Science/Science';
import Sport from './Pages/Sport/Sport';
import BBC from './Pages/BBC/BBC';
import Technology from './Pages/Technology/Technology';

// import { useState } from 'react';
function App() {
 
  return (
   <body className='Appcontainer'>
     <div className="App">
    <Router>
     <Navbar/>
     <Category/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/business' element={<Business/>}/>
        <Route  path='/entertainment' element={<Entertainment/>}/>
        <Route  path='/health' element={<Health/>}/>
        <Route  path='/science' element={<Science/>}/>
        <Route  path='/sport' element={<Sport/>}/>
        <Route  path='/bbc' element={<BBC/>}/>
        <Route  path='/technology' element={<Technology/>}/>
      </Routes>
    </Router>
     </div>
   </body>
  );
}
export default App;
