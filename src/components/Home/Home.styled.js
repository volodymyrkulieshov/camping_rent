import styled from 'styled-components';

import camper from './images/Tails_OutsideVan_MercedesBenz_Sprinter-2.png';

export const Container = styled.div`
  width: 100vmax;
  height: 100vmax;
  background-image: url(${camper});
  background-size: contain;
  background-size: 100vw;
  background-position: center top;
  background-repeat: no-repeat;
`;
