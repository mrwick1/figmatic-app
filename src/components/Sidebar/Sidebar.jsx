import React from 'react';
import NavItem from '../NavItem/NavItem';
import {
  FlexBetween,
  NavLinks,
  PoweredBy,
  SidebarWrapper,
  Title,
} from './SidebarStyle';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Title>Remote sales fuel</Title>
      <FlexBetween>
        <NavLinks>
          <NavItem url="" text="dashboard" img="home" />
          <NavItem url="knowledge" text="knowledge" img="cap" />
          <NavItem url="members" text="members" img="team" />
          <NavItem url="teams" text="teams" img="teams" />
          <NavItem url="vault" text="vault" img="folder" />
          <NavItem url="chat" text="chat" img="chat" />
        </NavLinks>
        <NavLinks>
          <NavItem url="settings" text="settings" img="settings" />
          <NavItem url="company" text="company" img="company" />
          <NavItem url="my-profile" text="my profile" img="profile" />
        </NavLinks>
      </FlexBetween>
      <PoweredBy>Powered by Team Figmatic</PoweredBy>
    </SidebarWrapper>
  );
};

export default Sidebar;
