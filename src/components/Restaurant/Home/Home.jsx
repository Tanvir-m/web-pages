import WeAre from '../WeAre/WeAre';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../Services/Services';
import Counter from '../Counter/Counter';
import Health from '../Health/Health';
import ImgGal from '../ImgGal/ImgGal';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <WeAre />
        <Services />
        <Counter />
        <Health />
        <ImgGal />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
