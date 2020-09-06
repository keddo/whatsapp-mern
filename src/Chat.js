import React from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {MoreVert, SearchOutlined, AttachFile} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at 12:03AM</p>
                </div>
                <div className="chat__headerRight">
                   <IconButton>
                       <SearchOutlined/>
                   </IconButton>
                   <IconButton>
                       <AttachFile/>
                   </IconButton>
                   <IconButton>
                       <MoreVert/>
                   </IconButton>
                </div>
            </div>
            <div className="chat__body">
               <p className="chat__message">
                  <span className="chat__name">Kedir A.</span> 
                  This is messsage.
                  <span className="chat__timestamp">
                      { new Date().toUTCString()}
                  </span>  
                </p>   
               <p className="chat__message chat__reciever">
                  <span className="chat__name">Kedir A.</span> 
                  This is messsage.
                  <span className="chat__timestamp">
                      { new Date().toUTCString()}
                  </span>  
                </p>   
               <p className="chat__message">
                  <span className="chat__name">Kedir A.</span> 
                  This is messsage.
                  <span className="chat__timestamp">
                      { new Date().toUTCString()}
                  </span>  
                </p>   
            </div>
            <div className="chat__footer">
             <IconButton>
             <InsertEmoticonIcon/>
             </IconButton>
             <form action="#">
                 <input type="text" placeholder="Type a message"/>
                 <button type="submit">Send a Message</button>
             </form>
             <IconButton>
                 <MicIcon/>
             </IconButton>
            </div>
        </div>
    )
}

export default Chat
