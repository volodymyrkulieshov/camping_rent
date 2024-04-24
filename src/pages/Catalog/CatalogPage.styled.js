import styled from 'styled-components';

import camper from '../../components/Home/images/Tails_OutsideVan_MercedesBenz_Sprinter-2.png';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${camper});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const ContentContainer = styled.div`
  padding: 20px;
  overflow-y: auto;
  height: 100vh;
`;
