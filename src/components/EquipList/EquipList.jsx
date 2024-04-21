import sprite from '../../sprite.svg';
import { EquipList, EquipItem, EquipText, EquipIcon } from './EquipList.styled';

export const EquipmentList = ({ item }) => {
  const { adults, details } = item;

  return (
    <EquipList>
      <EquipItem>
        <EquipIcon>
          <use href={`${sprite}#adults`} />
        </EquipIcon>
        <EquipText>{adults} adults</EquipText>
      </EquipItem>

      <EquipItem>
        <EquipIcon width="20" height="20">
          <use href={`${sprite}#transmission`} />
        </EquipIcon>
        <EquipText>Automatic</EquipText>
      </EquipItem>

      <EquipItem>
        <EquipIcon>
          <use href={`${sprite}#fuel`} />
        </EquipIcon>
        <EquipText>Petrol</EquipText>
      </EquipItem>

      <EquipItem>
        <EquipIcon>
          <use href={`${sprite}#kitchen`} />
        </EquipIcon>
        <EquipText>Kitchen</EquipText>
      </EquipItem>

      <EquipItem>
        <EquipIcon>
          <use href={`${sprite}#bed`} />
        </EquipIcon>
        <EquipText>{details.beds} beds</EquipText>
      </EquipItem>

      <EquipItem>
        <EquipIcon>
          <use xlinkHref={`${sprite}#airConditioner`} />
        </EquipIcon>
        <EquipText>AC</EquipText>
      </EquipItem>
    </EquipList>
  );
};
