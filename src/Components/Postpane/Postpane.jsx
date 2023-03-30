import React from 'react'
import Addpost from '../Addpost/Addpost';
import Post from '../Post/Post';
import "./Postpane.css";

export default function Postpane() {
  return (
    <div>
    <div className="PostpaneBox">
     
      <Addpost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
  )
}
