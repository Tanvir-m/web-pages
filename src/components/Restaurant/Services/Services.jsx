import { Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import ServiceTwo from './ServiceTwo';

const Services = () => {
  return (
    <>
      <Row>
        <Col md={6} className={`py-5 my-5`}>
          <Row>
            <Col sm={{ span: 5, offset: 1 }} className={``}>
              <p
                className={`pl-5 pt-5 pb-5 ${style.ral}`}
                style={{ textAlign: 'right' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard
              </p>
            </Col>
            <Col sm={5}>
              <h4 className={`pr-5 pt-5 pb-5 ${style.ral}`}>
                Lorem Ipsum is simply dummy text of the printing simply dummy
                text of the printing
              </h4>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <img
                src={process.env.PUBLIC_URL + '/img/ser1.jpg'}
                className={`${style.fullImg}`}
                alt=""
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} className="py-5 my-5">
          <Row>
            <ServiceTwo
              num={1}
              heading="Lorem Ipsum"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            />
            <ServiceTwo
              num={2}
              heading="Lorem Ipsum"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            />
            <ServiceTwo
              num={3}
              heading="Lorem Ipsum"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            />
            <ServiceTwo
              num={4}
              heading="Lorem Ipsum"
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Services;
