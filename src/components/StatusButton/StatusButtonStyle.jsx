import styled from 'styled-components';
import { colors } from '../../consts/theme';

const border = `1px solid ${colors.black}`;
const borderNone = `1px solid ${colors.white}`;
export const Button = styled.button`
  border: none;
  background-color: ${colors.white};
  font-size: 17px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${(props) => (props.status ? border : borderNone)};
`;
