import React from 'react'
import './RoomDetail.css';

import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png';
const RoomDetail=({room})=>(
<div className="infoBar">
    <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon}/>
        <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        <a href="/"> <img src={closeIcon} alt="Close Chat"/></a>
    </div>
</div>
)
export default RoomDetail;