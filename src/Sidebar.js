import React from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://cdn.pixabay.com/photo/2017/04/30/11/42/hijab-2272708_960_720.png"/>
                <div className="sidebar_headerRight">
                   <IconButton>
                     <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                     <ChatIcon  />
                   </IconButton>
                   <IconButton>
                     <MoreVertIcon/>
                   </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchIcon/>
                <input type="text" placeholder="Search or Start a new chat"/>
                </div>
            </div>

            <div className="sidebar__chat">
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
            </div> 
        </div>
    )
}

export default Sidebar
