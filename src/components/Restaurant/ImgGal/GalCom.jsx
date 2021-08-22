import { Container, Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { Button } from '../css/styledComponents/Styled';
import propTypes from 'prop-types';
import { useState } from 'react';

const GalCom = (props) => {
  const [img, setImg] = useState(props.img);

  const imgOneClickHandler = () => {
    setImg(props.imgOne);
  };

  const imgTwoClickHandler = () => {
    setImg(props.imgTwo);
  };

  const imgThreeClickHandler = () => {
    setImg(props.imgThree);
  };
  return (
    <>
      <Container fluid>
        <Row className="py-5">
          <Col md={{ span: 6, order: props.order }}>
            <img
              src={process.env.PUBLIC_URL + `/img/${img}.jpg`}
              className={`${style.fullImg}`}
              alt=""
            />
          </Col>
          <Col md={6}>
            <Row className={`text-center py-5 ${style.shadow} ${style.ral}`}>
              <h3 className="py-4">Lorem ipsum Lorem Ipsum</h3>
              <p className="pb-4">
                Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum
                Lorem ipsum Lorem Ipsum
              </p>
              <center className={`pb-4`}>
                <Button dark={props.dark}>Lorem Ipsum</Button>
              </center>
            </Row>
            <Row className="mt-5 pt-5">
              <Col sm={4}>
                <img
                  onClick={imgOneClickHandler}
                  src={process.env.PUBLIC_URL + `/img/${props.imgOne}.jpg`}
                  className={`${style.fullImg} ${style.shadow} ${style.imgGl}`}
                  alt=""
                />
              </Col>
              <Col sm={4}>
                <img
                  onClick={imgTwoClickHandler}
                  src={process.env.PUBLIC_URL + `/img/${props.imgTwo}.jpg`}
                  className={`${style.fullImg} ${style.shadow} ${style.imgGl}`}
                  alt=""
                />
              </Col>
              <Col sm={4}>
                <img
                  onClick={imgThreeClickHandler}
                  src={process.env.PUBLIC_URL + `/img/${props.imgThree}.jpg`}
                  className={`${style.fullImg} ${style.shadow} ${style.imgGl}`}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

GalCom.propTypes = {
  order: propTypes.number,
  img: propTypes.string,
  imgOne: propTypes.string,
  imgTwo: propTypes.string,
  imgThree: propTypes.string,
  mar: propTypes.string,
};

export default GalCom;
