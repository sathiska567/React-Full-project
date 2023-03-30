import React from 'react'
import "./Home.css";
import Navbar from '../../Components/Navigation/Navbar'
import Leftpane from '../../Components/Leftpane/Leftpane'
import Postpane from '../../Components/Postpane/Postpane'
import Rightpane from '../../Components/Rightpane/Rightpane'

export default function Home() {
  return (
    <div>
        
      <Navbar />

    <div className="bottomConatiner">
      <table>
        <tr>
          <td className='first'><Leftpane /></td>
          <td className='second'><Postpane /></td>
          <td className='third'><Rightpane /></td>
        </tr>
      </table>


    </div>
     
      
    </div>
  )
}
