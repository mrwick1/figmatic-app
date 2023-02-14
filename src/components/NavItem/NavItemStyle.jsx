import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const LinkItem = styled.div`
  a {
    display: flex;
    gap: 1rem;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${(props) =>
      props.active ? colors['gray-400'] : 'transparent'};
    text-decoration: none;
    color: ${colors.white};
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
  }
`;

export const ImgDiv = styled.div`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
