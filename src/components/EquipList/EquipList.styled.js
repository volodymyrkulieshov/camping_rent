import styled from 'styled-components';

export const EquipList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`;

export const EquipItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  padding: 12px 18px;
  max-width: 187px;
  height: 44px;
  background: rgba(242, 244, 247, 1);
`;

export const EquipText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;

export const EquipIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
