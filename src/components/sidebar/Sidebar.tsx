import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AddIcon from "@mui/icons-material/Add"
import SidebarChannel from './SidebarChannel'
import MicIcon from "@mui/icons-material/Mic"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import SettingIcon from "@mui/icons-material/Settings"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon/>
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon/>
              <h4>プログラミング</h4>
            </div>
            <AddIcon className='sidebarAddIcon'/>
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src="./icon.png" alt="" />
              <div className="accountName">
                <h4>YamaYoshi</h4>
                <span>#8162</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon/>
              <HeadphonesIcon/>
              <SettingIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
