import React from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Navbar() {
  return (
    <>
     <div className="navBarBox">
         <div className="navBarLeft">
            <span className="logo">Fakebook</span>
         </div>

         <div className="navBarCenter">

             <div className="searchBarBox">
              <SearchIcon className='searchicon'/>
              <input placeholder='Search for your Friend' className="searchInput" />
             </div>

         </div>


         <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">Home</span>
                <span className="navBarLink">Profile</span>
            </div>

            <div className="navBarIcons">

                <div className="navBarIcon">
                   < PersonIcon /> 
                   <span className="iconTag">3</span>
                </div>

                <div className="navBarIcon">
                      <EmailIcon />
                      <span className="iconTag">5</span>

                </div>

                <div className="navBarIcon">
                  <SettingsIcon />
                  <span className="iconTag">4</span>

                </div>
            </div>

            <div className="pi">
                <img src="/images/03.jpg" alt="image" className="profileImage" />
            </div>
         </div>
     </div>
    
    
    </>
  )
}
