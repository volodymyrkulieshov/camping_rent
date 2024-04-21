import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/camperSelectors';
import { getAllCampersThunk } from '../../redux/camperThunk';
import CamperCard from '../CamperCard/CamperCard';
import { AdvertsList, CamperListWrap, LoadMoreBtn } from './CamperList.styled';

const CamperList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllCampers);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCampersThunk(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <CamperListWrap>
      <AdvertsList>
        {items.map(item => (
          <li key={item._id}>
            <CamperCard item={item} />
          </li>
        ))}
      </AdvertsList>
      <LoadMoreBtn type="button" onClick={handleLoadMore}>
        Load more
      </LoadMoreBtn>
    </CamperListWrap>
  );
};
export default CamperList;

// <li key={item._id}>
//   <CamperCard item={item} />
// </li>
