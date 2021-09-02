import { Col } from 'react-bootstrap';
import { GiFoodChain, GiFoodTruck, GiOpenedFoodCan } from 'react-icons/gi';
import { SiIfood } from 'react-icons/si';
import style from '../css/style.module.scss';

const ServiceTwo = (props) => {
  const number = () => {
    if (props.num === 1) {
      return (
        <>
          <Col md={6} className="text-center p-5">
            <GiFoodChain className={`${style.icons}`} />
            <h3 className={`${style.ral}`}>{props.heading}</h3>
            <p className={`${style.ral}`}>{props.para}</p>
          </Col>
        </>
      );
    } else if (props.num === 2) {
      return (
        <>
          <Col md={6} className="text-center p-5">
            <GiFoodTruck className={`${style.icons}`} />
            <h3 className={`${style.ral}`}>{props.heading}</h3>
            <p className={`${style.ral}`}>{props.para}</p>
          </Col>
        </>
      );
    } else if (props.num === 3) {
      return (
        <>
          <Col md={6} className="text-center p-5">
            <GiOpenedFoodCan className={`${style.icons}`} />
            <h3 className={`${style.ral}`}>{props.heading}</h3>
            <p className={`${style.ral}`}>{props.para}</p>
          </Col>
        </>
      );
    } else if (props.num === 4) {
      return (
        <>
          <Col md={6} className="text-center p-5">
            <SiIfood className={`${style.icons}`} />
            <h3 className={`${style.ral}`}>{props.heading}</h3>
            <p className={`${style.ral}`}>{props.para}</p>
          </Col>
        </>
      );
    }
  };

  return (
    <>
      {number()}
      {/* <GiFoodChain className={`${style.icons}`} /> */}
    </>
  );
};

export default ServiceTwo;
