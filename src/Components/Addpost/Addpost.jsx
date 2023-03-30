import React from 'react'
import "./Addpost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function Addpost() {
  return (
    <div className='addpost'>
       <div className="addpostcontainer">
          <div className="addposttop">
              <img src="./images/03.jpg" alt="" className="addpostpic" />
               <input type="text" placeholder='What in your mind...?' className="addpostinput" />
          </div>
     <hr className='addposthr'/>

           <div className="addpostbottom">
              <div className="addpostoptions">
                  <div className="addpostoption">

                  <InsertPhotoIcon htmlColor='orange' className='addpostoptionpic'/>
                 <span className="optiontext">
                    Add photo/Video
                 </span>
                  </div>

                  <div className="addpostoption">
                  <AddLocationAltIcon htmlColor='red' className='addpostoptionpic'/>
                 <span className="optiontext">
                    Add location
                 </span>
                  </div>

                  <div className="addpostoption">
                  <LiveTvIcon htmlColor='tomato' className='addpostoptionpic'/>
                 <span className="optiontext">
                    Live
                 </span>
                  </div>

                  <div className="addpostoption">
                  <LocalOfferIcon htmlColor='blue' className='addpostoptionpic'/>
                 <span className="optiontext">
                    Tag
                 </span>
                  </div>

              </div>
              <button className="PostButton">Post</button>

        
 
           </div>
       </div>
    </div>
  )
}
