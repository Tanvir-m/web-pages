import { Container, Row, Col } from 'react-bootstrap';
import { RiFacebookFill } from 'react-icons/ri';
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import style from '../../travel//Home/css/style.module.scss';

const SocialMedia = () => {
  return (
    <>
      <Container>
        <Row>
          <hr />
          <Col md={2}>
            <h1 className="text-left">VICTORIA</h1>
          </Col>
          <Col md={{ span: 4, offset: 5 }}>
            <Row>
              <Col sm={3}>
                <RiFacebookFill className={`${style.sIcons} ${style.fb}`} />
              </Col>
              <Col sm={3}>
                <AiOutlineInstagram
                  className={`${style.sIcons} ${style.insta}`}
                />
              </Col>
              <Col sm={3}>
                <AiFillYoutube className={`${style.sIcons} ${style.yout}`} />
              </Col>
              <Col sm={3}>
                <AiOutlineTwitter className={`${style.sIcons} ${style.twit}`} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SocialMedia;
