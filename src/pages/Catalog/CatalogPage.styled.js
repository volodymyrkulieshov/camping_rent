import styled from 'styled-components';

import camper from '../../components/Home/images/Tails_OutsideVan_MercedesBenz_Sprinter-2.png';

export const Container = styled.div`
  width: 100vmax;
  height: 100vmax;
  background-image: url(${camper});
  /* background-size: contain; */
  background-size: 100vw;
  /* background-position: center bottom; */
  background-repeat: no-repeat;
`;