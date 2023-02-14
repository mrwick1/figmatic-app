import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const TopbarWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors['gray-300']};
`;
export const PageTitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const RightFlex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
export const CreateCourse = styled.button`
  border: 1px solid ${colors.black};
  padding: 10px 20px;
  background-color: ${colors['blue-600']};
  color: ${colors.white};
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
  :hover {
    border-color: ${colors['blue-600']};
    color: ${colors.black};
    background-color: ${colors.white};
  }
`;
export const ProfileImage = styled.img`
  height: 45px;
  width: 45px;
  cursor: pointer;
  border-radius: 40px;
  object-fit: cover;
`;
