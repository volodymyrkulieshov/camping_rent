import { Button, Typography } from '@mui/material';
import { Container } from './Home.styled';
import { useNavigate } from 'react-router';
// import Description from './Description';

const Home = () => {
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate('/catalog');
  };
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        CAMPING RENTAL
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Browse our selection, reserve your camper, and get ready to embark on
        the adventure of a lifetime with us!
      </Typography>
      <Button
        variant="outlined"
        onClick={handlerClick}
        style={{ color: 'orange', border: '1px solid orange' }}
      >
        Rent Camp
      </Button>
    </Container>
  );
};
export default Home;
