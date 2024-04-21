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

const CamperCard = ({ item }) => {
  const {
    // _id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    // reviews,
  } = item;

  return (
    <>
      <CamperCardWrap>
        <ImgWrap>
          <CamperCardImg src={gallery[0]} alt={name} />
        </ImgWrap>
        <ContentWrap>
          <PriceWrap>
            <CamperName>{name}</CamperName>
            <CamperPrice>{price}</CamperPrice>
            <FavBtn>
              <IconBtn>
                <use href={`${sprite}#heart`} />
              </IconBtn>
            </FavBtn>
          </PriceWrap>
          <RateWrap>
            <Rating>
              <IconBtn>
                <use href={`${sprite}#star`} />
              </IconBtn>
              {rating}
            </Rating>
            <Location>
              <IconBtn>
                <use href={`${sprite}#location`} />
              </IconBtn>
              {location}
            </Location>
          </RateWrap>
          <Description>{description}</Description>
        </ContentWrap>
      </CamperCardWrap>
    </>
  );
};
export default CamperCard;