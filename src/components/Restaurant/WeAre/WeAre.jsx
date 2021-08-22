import { Col, Container, Row } from 'react-bootstrap';
import style from '../css/style.module.scss';

const WeAre = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className={`${style.padMar} text-center mt-3`}>
          <h1 className={`pt-5 mt-5 ${style.ral}`}>WE ARE VICTORIA</h1>
          <p className={`px-5  ${style.ral}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <img
            src={process.env.PUBLIC_URL + '/img/weAre.jpg'}
            className={`${style.fullImg} ${style.weAreImg} p-5`}
            alt=""
          />
        </Col>
        <Col md={6} className={`${style.padMar}`}>
          <img
            src={process.env.PUBLIC_URL + '/img/weAre2.jpg'}
            className={`${style.fullImg}`}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WeAre;
