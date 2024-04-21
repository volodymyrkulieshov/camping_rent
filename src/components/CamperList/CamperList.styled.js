import styled from 'styled-components';

export const CamperListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  padding-top: 50px;
`;

export const LoadBtn = styled.button`
  border: ${p => p.theme.border.grey};
  border-radius: 200px;
  padding: 16px 32px;
  min-width: 145px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  background-color: transparent;

  &:hover {
    border: ${p => p.theme.border.red};
  }
`;
