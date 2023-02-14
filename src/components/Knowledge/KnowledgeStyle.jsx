import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 3rem 2rem;
`;

export const StatusFlex = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
`;
export const KnowledgeWrapper = styled.div`
  background-color: ${colors['gray-100']};
`;

export const Select = styled.select`
  width: 200px;
  height: 40px;
  padding: 0 1rem;
  text-transform: uppercase;
`;
