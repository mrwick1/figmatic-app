import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const SidebarWrapper = styled.div`
  width: 280px;
  background-color: ${colors.black};
  color: ${colors.white};
  height: 100vh;
  flex-shrink: 0;
`;

export const Title = styled.h4`
  color: ${colors.white};
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding-top: 3rem;
`;

export const FlexBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8rem);
  padding-inline: 1rem; ;
`;

export const NavLinks = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const PoweredBy = styled.div`
  border-top: 1px solid ${colors.white};

  height: 40px;
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;
