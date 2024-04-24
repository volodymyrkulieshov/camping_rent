import CamperList from '../../components/CamperList/CamperList';
import { Container, ContentContainer } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <Container>
      <ContentContainer>
        <CamperList />
      </ContentContainer>
    </Container>
  );
};

export default CatalogPage;
