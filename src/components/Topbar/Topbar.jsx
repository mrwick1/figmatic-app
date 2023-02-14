import React from 'react';
import {
  CreateCourse,
  PageTitle,
  ProfileImage,
  RightFlex,
  TopbarWrapper,
} from './TopbarStyle';

const Topbar = ({ title }) => {
  return (
    <TopbarWrapper>
      <PageTitle>{title}</PageTitle>
      <RightFlex>
        <CreateCourse>Create Course</CreateCourse>
        <ProfileImage src="/public/assets/images/profile.jpg" />
        <img src="/public/assets/images/menu.svg" alt="" />
      </RightFlex>
    </TopbarWrapper>
  );
};

export default Topbar;
