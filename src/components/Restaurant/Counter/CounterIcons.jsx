import { Col } from 'react-bootstrap';
import { BsStopwatchFill } from 'react-icons/bs';
import { GiPocketWatch, GiStopwatch, GiWatch } from 'react-icons/gi';
import style from '../css/style.module.scss';

const CounterIcons = (props) => {
  const demo = (
    <>
      <h2 className={style.black}>
        <b>+</b>
        {props.heading}
      </h2>
      <p className={style.black}>{props.para}</p>
    </>
  );

  const counter = () => {
    if (props.counter === 1) {
      return (
        <>
          <Col md={3} className="py-5 text-center">
            <BsStopwatchFill className={`${style.counterIcons}`} />
            {demo}
          </Col>
        </>
      );
    } else if (props.counter === 2) {
      return (
        <>
          <Col md={3} className="py-5 text-center">
            <GiPocketWatch className={`${style.counterIcons}`} />
            {demo}
          </Col>
        </>
      );
    } else if (props.counter === 3) {
      return (
        <>
          <Col md={3} className="py-5 text-center">
            <GiStopwatch className={`${style.counterIcons}`} />
            {demo}
          </Col>
        </>
      );
    } else if (props.counter === 4) {
      return (
        <>
          <Col md={3} className="py-5 text-center">
            <GiWatch className={`${style.counterIcons}`} />
            {demo}
          </Col>
        </>
      );
    }
  };
  return <>{counter()}</>;
};

export default CounterIcons;
