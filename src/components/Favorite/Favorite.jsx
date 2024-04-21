import CamperCard from 'components/CamperCard/CamperCard';
import { FavCampList, ListWrap } from './Favorite.styled';

export const Favorite = ({ favorites }) => {
  return (
    <ListWrap>
      <FavCampList>
        {favorites.map(item => (
          <li key={item._id}>
            <CamperCard item={item} />
          </li>
        ))}
      </FavCampList>
    </ListWrap>
  );
};
