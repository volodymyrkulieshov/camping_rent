import {
  CamperCardImg,
  CamperCardWrap,
  CamperName,
  CamperPrice,
  ContentWrap,
  Description,
  FavBtn,
  IconBtn,
  ImgWrap,
  Location,
  PriceWrap,
  RateWrap,
  Rating,
} from './CamperCard.styled';

import sprite from '../../sprite.svg';
import { EquipmentList } from '../EquipList/EquipList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/camperSelectors';
import { addFavorites, removeFavorites } from '../../redux/favoritesSlice';

const CamperCard = ({ item }) => {
  const {
    // _id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
  } = item;

  const normalizedPrice = price.toFixed(2);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites.some(fav => fav._id === item._id)) {
      setIsFavorite(true);
    }
  }, [favorites, item._id]);

  const heartIcon = isFavorite ? 'heartFull' : 'heart';

  const handleSelectFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addFavorites(item));
    } else {
      dispatch(removeFavorites(item._id));
    }
  };
  return (
    <>
      <CamperCardWrap>
        <ImgWrap>
          <CamperCardImg src={gallery[0]} alt={name} />
        </ImgWrap>
        <ContentWrap>
          <PriceWrap>
            <CamperName>{name}</CamperName>
            <CamperPrice>{normalizedPrice}</CamperPrice>
            <FavBtn type="button" onClick={handleSelectFavorite}>
              <IconBtn>
                <use href={`${sprite}#${heartIcon}`} />
              </IconBtn>
            </FavBtn>
          </PriceWrap>
          <RateWrap>
            <Rating>
              <IconBtn>
                <use href={`${sprite}#star`} />
              </IconBtn>
              {rating} ({reviews.length} Reviews)
            </Rating>
            <Location>
              <IconBtn>
                <use href={`${sprite}#location`} />
              </IconBtn>
              {location}
            </Location>
          </RateWrap>
          <Description>{description}</Description>
          <EquipmentList item={item} />
        </ContentWrap>
      </CamperCardWrap>
    </>
  );
};
export default CamperCard;
