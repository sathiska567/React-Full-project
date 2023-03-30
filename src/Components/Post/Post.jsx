import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export default function Post() {
  return (
    <>
     <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="./images/03.jpg" alt="" className="postimg" />
                <span className="postUserName">Jelina Fernando</span>
                <div className="postTime">5 min ago</div>
                </div>
              </div>

              <div className="postCenter">
                 <div className="postCaption">
                   Hello i'm Batman.....
                 </div>
                 <img src="./images/03.jpg" alt="" className="posted-img" />
              </div>

              <div className="postBottom">
                 <div className="postBottomLeft">
                    <ThumbUpIcon htmlColor='blue' className='reactionpic'/>
                    <FavoriteIcon htmlColor='red' className='reactionpic'/>
                    <SentimentVerySatisfiedIcon htmlColor='green' className='reactionpic'/>
                    <span className="likeCount">Batman and 225 other</span>
                  </div>   

                  <div className="PostBottomRight">
                 <span className="commentCount">
                   15 comment
                 </span>
               </div>

               </div>
        </div>
     </div>
    
    </>
  )
}
