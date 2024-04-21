import { useSelector } from 'react-redux';
import { Favorite } from '../../components/Favorite/Favorite';
import { Container } from './FavoritePage.styled';
import { selectFavorites } from '../../redux/camperSelectors';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length > 0 ? (
        <Favorite favorites={favorites} />
      ) : (
        <h2>Not added to favorites </h2>
      )}
    </Container>
  );
};

export default FavoritePage;
