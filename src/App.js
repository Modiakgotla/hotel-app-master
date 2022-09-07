import React from 'react'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from '../src/component/home/home'
 import LeftSection from '../src/component/admin/leftSection'
//  import MiddleSection from '../src/component/admin/middleSection'
//  import RightSection from '../src/component/admin/rightSection'
import About from './component/about/About'
// import Book from './component/booking/Booking'
import Contact from './component/contact/Contact'
import Rooms from './component/rooms/rooms'
import Services from './component/services/services'
import HomePage from './component/home/homepage';

function App () {
  return (
    <div>
  
      
      <Router>
      <Routes>
        <Route exact path='/' element= {<HomePage/>}/>
        <Route path="/About" element={<About/>} />

        <Route path="/Contacts" element={<Contact/>} />
        <Route path="/Rooms" element={<Rooms/>} />
        <Route path="/Services" element={<Services/>} />
        {/* <Route path="/Booking" element = {<Book/>} /> */}
      </Routes>
    
     </Router>
    
      
    </div>
  );
}

export default App
