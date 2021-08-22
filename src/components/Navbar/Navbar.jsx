import { Container, Row, Col } from 'react-bootstrap';
import style from '../travel/Home/css/style.module.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [bar, setBar] = useState(true);

  const barClickHandler = () => {
    setBar(!bar);
  };

  return (
    <>
      <Container fluid className={`${style.navbar}`}>
        <Container>
          <Row>
            <Col md={6}>
              <Row>
                <Col xs={10}>
                  <h1 className={style.logo}>VICTORIA</h1>
                </Col>
                <Col xs={2}>
                  {bar && (
                    <FaBars
                      onClick={barClickHandler}
                      className={`${style.barIcon}`}
                    />
                  )}
                  {!bar && (
                    <AiOutlineClose
                      onClick={barClickHandler}
                      className={`${style.barIcon}`}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <ul className={`${bar ? style.ulList : style.ulListfalse}`}>
                <Link to="/" className={`${style.link}`}>
                  <li>Travel</li>
                </Link>
                <Link to="/food" className={`${style.link}`}>
                  <li>Food</li>
                </Link>
                <li>Products</li>
                <li className={style.signUp}>
                  <button>SIGN UP</button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Navbar;
