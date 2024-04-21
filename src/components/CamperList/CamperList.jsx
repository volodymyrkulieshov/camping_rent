import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/camperSelectors';
import { getAllCampersThunk } from '../../redux/camperThunk';
import CamperCard from '../CamperCard/CamperCard';
import { AdvertsList, CamperListWrap } from './CamperList.styled';

const CamperList = () => {
  const items = useSelector(selectAllCampers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCampersThunk());
  }, [dispatch]);

  return (
    <CamperListWrap>
      <AdvertsList>
        {items.map(item => (
          <li key={item._id}>
            <CamperCard item={item} />
          </li>
        ))}
      </AdvertsList>
    </CamperListWrap>
  );
};
export default CamperList;

// <li key={item._id}>
//   <CamperCard item={item} />
// </li>
