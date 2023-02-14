import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import { MainDiv, OutletDiv } from './HomePageStyle';

const HomePage = () => {
  const { pathname } = useLocation();
  const title = pathname.replace('/', '')
    ? pathname.replace('/', '').replace('-', ' ')
    : 'Dashboard';
  return (
    <MainDiv>
      <Sidebar />
      <OutletDiv>
        <Topbar title={title} />
        <Outlet />
      </OutletDiv>
    </MainDiv>
  );
};

export default HomePage;
