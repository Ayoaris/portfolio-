import React from 'react'
import { SidebarStyle } from './sidebarStyle';

function Sidebar() {
  return (
    <SidebarStyle>
      <div className="sidebar">
        <div className="sidebar-right"></div>
        <div className="sidebar-left"></div>
      </div>
    </SidebarStyle>
  );
}

export default Sidebar;
