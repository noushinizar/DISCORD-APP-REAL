import { useState } from 'react'
import Navbar from './navbar'
import "./discord-nitro.css";
import Frame from './frameone';
import Part2 from './part-two';
import Plans from './plans';
import Sidebar from '../layout-component/Sidebar';
import Menubar from '../layout-component/Menubar';




function Nitroo() {
  
  return (
    <>
     <Sidebar/>
     <Menubar/>
     <div className="nitrocontainer">
     <div className="nitromain">
  
     
     <Navbar/>
     <Frame/>
     <Part2/>
     <Plans/>


     </div>
     </div>

    </>
  )
}

export default Nitroo
