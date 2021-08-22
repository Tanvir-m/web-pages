import { Container, Row } from 'react-bootstrap';
import style from '../css/style.module.scss';
import CounterIcons from './CounterIcons';

const Counter = () => {
  return (
    <>
      <Container fluid className={`${style.countRow}`}>
        <Container>
          <Row>
            <CounterIcons heading="123" para="Lorem Ipsum" counter={1} />
            <CounterIcons heading="123" para="Lorem Ipsum" counter={2} />
            <CounterIcons heading="123" para="Lorem Ipsum" counter={3} />
            <CounterIcons heading="123" para="Lorem Ipsum" counter={4} />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Counter;
