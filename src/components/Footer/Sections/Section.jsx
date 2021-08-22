import { Col } from 'react-bootstrap';
import style from '../../travel/Home/css/style.module.scss';

const Section = (props) => {
  return (
    <>
      <Col md={3} className={style.footerSec}>
        <h3>{props.head}</h3>
        <ul>
          <li>{props.one}</li>
          <li>{props.two}</li>
          <li>{props.three}</li>
          <li>{props.four}</li>
          <li>{props.five}</li>
        </ul>
      </Col>
    </>
  );
};

export default Section;
