import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const CardDiv = styled.div`
  border: 1px solid ${colors.black};
  position: relative;
  background-color: ${colors.white};
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
export const DescArea = styled.div`
  padding: 1rem;
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 18px;
`;

export const UpdatedOn = styled.span`
  font-size: 12px;
  color: ${colors['gray-400']};
`;

export const Details = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: ${colors['gray-400']};
    img {
      height: 20px;
    }
  }
`;
export const Tag = styled.span`
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  text-transform: capitalize;
  background-color: ${colors['gray-300']};
`;

export const TeamFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem; ;
`;
