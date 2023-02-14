import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImgDiv, LinkItem } from './NavItemStyle';

const NavItem = ({ url, text, img }) => {
  const { pathname } = useLocation();
  var active = false;
  if (pathname.includes('-')) {
    const location = pathname.replace('-', '');
    const url2 = url.replace('-', '');
    active = location === `/${url2}`;
  } else {
    active = pathname === `/${url}`;
  }
  return (
    <LinkItem active={active ? true : false}>
      <Link to={`/${url}`}>
        <ImgDiv>
          <img src={`/assets/images/${img}.svg`} alt={img} />
        </ImgDiv>
        <p>{text}</p>
      </Link>
    </LinkItem>
  );
};

export default NavItem;
