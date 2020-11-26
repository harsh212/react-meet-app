import React, { useState,useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Chatbox from '../ChatBox/Chatbox';
import Input from '../Input/Input';
import RoomDetail from '../RoomDetail/RoomDetail';
import './Chat.css'
const SERVER_ADDR='https://react-meet-app.herokuapp.com/';
let socket;
const Chat=({location})=>{
    const[name,setName]=useState('');
    const[room,setRoom]=useState(''); 
    const[chatbox,setChatbox]=useState([]);
    const[message,setMessage]=useState(''); 
    // url se data lekr name or room set krna 
    useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        socket=io(SERVER_ADDR);
        setName(name);
        setRoom(room);
        console.log(socket);
        //emit onjoin defined in server
        socket.emit('onjoin',{name,room},()=>{
        });
        //exit from component
        return ()=>{
            socket.emit('disconnect');
        }
    },[SERVER_ADDR,location.search]);
    ///Handling message .. sever emit 'message'
    useEffect(()=>{
         socket.on('message',(message)=>{
            setChatbox([...chatbox,message]);//push message in chatbox array
         })
    },[chatbox]);

    ///Sending message function

    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
    }
    console.log(message,chatbox);
    return (
      <div className="outerContainer">
        <div className="container">
          <RoomDetail room={room}/>
          <Chatbox messages={chatbox} name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}>
          </Input>
        </div>
      </div>
    );
}

export default Chat;