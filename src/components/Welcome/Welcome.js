import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import TextArea from '../TextArea/TextArea'
import './Welcome.css';
const Join=()=>
{
    const[name,setName]=useState('');
    const[room,setRoom]=useState('');

    return (
        <div className="joinOuterContainer">
            <div className="leftContainer">
                <div className="heading">Join Meeting</div>
                <div><input placeholder="Enter Username" className="joinInput mt-20" type="text" onChange={(event)=>setName(event.target.value)}/></div>
                <div><input placeholder="Enter Room Name" className="joinInput mt-20" type="text" onChange={(event)=>setRoom(event.target.value)}/></div>
                <Link onClick={(event)=>(!name||!room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">Enter</button>
                </Link>
            </div>
        <TextArea/>
        </div>
    )
}
export default Join;