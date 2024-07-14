import React, { useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import './SideBar.css';
import { BookMarked, ChevronDown, CircleUserRound, Moon, Phone, Rss, Settings, Users } from 'lucide-react';
import SideBarLink from '../SideBarLink/SideBarLink';


const SideBar = ({ setShowSidebar, showSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSidebar, setShowSidebar]);

  const links = [
    {
        name : 'New Group',
        icon : <Users size={20}/>,
        button :false
    },
    {
        name : 'New Channel',
        icon : <Rss size={20}/>,
        button :false
    },
    {
        name : 'Contacts',
        icon : <CircleUserRound size={20}/>,
        button :false
    },
    {
        name : 'Calls',
        icon : <Phone size={20}/>,
        button :false
    },
    {
        name : 'Saved Messages',
        icon : <BookMarked size={20}/>,
        button :false
    },
    {
        name : 'Settings',
        icon : <Settings size={20}/>,
        button :false
    },
    {
        name : 'Night Mode',
        icon : <Moon size={20}/>,
        button :true
    },
  ]

 

  return (
    <div className='sidebar' style={{ display: showSidebar ? 'block' : 'none' }}>
      <div className="sidebar-container" ref={sidebarRef}>
        <div className="sidebar-header">
          <Avatar round={true} size={50} name='BeyondChats' />
          <div className="header-details">
            <div className="header-user-details">
              <p className="name">BeyondChats</p>
              <p className="emoji-status">Set Emoji Status</p>
            </div>
            <ChevronDown size={18} color='#a4a2a2' />
          </div>
        </div>
        {
            links.map((link,index)=>{
                return(
                    <SideBarLink key={index} link={link}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default SideBar;
