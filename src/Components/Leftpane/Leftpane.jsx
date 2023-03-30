import React from 'react'
import "./Leftpane.css";
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function leftpane() {
  return (
    <div>
      <div className="leftpaneBox">
        <div className="leftpaneContainer">
           <div className="leftpaneMenu">

             <li className="leftpanemenuItem">
                <MessageIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                    Messages
                </span>
             </li>

             <li className="leftpanemenuItem">
                <GroupIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                   Group
                </span>
             </li>

             <li className="leftpanemenuItem">
                <RssFeedIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                    Feed
                </span>
             </li>

             <li className="leftpanemenuItem">
                <FlagIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                Pages
                </span>
             </li>

             <li className="leftpanemenuItem">
                <CalendarMonthIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                Event
                </span>
             </li>

             <li className="leftpanemenuItem">
                <BuildIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                    Setting
                </span>
             </li>

             <li className="leftpanemenuItem">
                <SportsEsportsIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                Sports
                </span>
             </li>

             <li className="leftpanemenuItem">
                <NewspaperIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                Newspaper
                </span>
             </li>

             <li className="leftpanemenuItem">
                <WorkOutlineIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                Work Outline
                </span>
             </li>

             <li className="leftpanemenuItem">
                <AddShoppingCartIcon className='leftpaneMenuIcon' />
                <span className="leftpaneMenuText">
                   Shopping
                </span>
             </li>

             <hr />

   {/* ================================================================================= */}

                <div className="PagesYouLiked">
                <h3>Fage You Liked</h3>
                </div>

             <div className="pageList">

             <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>


              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>


              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>


              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>


              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>
              <li className="pageListItem">
                <img src="/images/03.jpg" alt="" className="pagePic" />
                <span>Code with Bunchi</span>
              </li>
           

             </div>
           </div>
        </div>
      </div>
    </div>
  )
}
