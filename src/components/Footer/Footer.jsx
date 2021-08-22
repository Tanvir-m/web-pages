import { Container, Row, Col } from 'react-bootstrap';
import style from '../travel/Home/css/style.module.scss';
import Section from './Sections/Section';
import SocialMedia from './Sections/SocialMedia';

const Footer = () => {
  return (
    <>
      <Container fluid className={`${style.footer}`}>
        <Container className="text-center py-5">
          <h2 className="pt-4">
            Join the Adventure newsletter to receive our best vacation deals
          </h2>
          <h4 className=" pt-3">You can unsubscribe at any time</h4>
          <Row className="pt-md-3">
            <Col md={{ span: 3, offset: 4 }}>
              <input
                type="text"
                className={`form-control`}
                placeholder="Your Email"
              />
            </Col>
            <Col md={{ span: 2 }}>
              <button>Subscribe</button>
            </Col>
          </Row>
          <Row className="mt-md-5 p-5">
            <Section
              head="About Us"
              one="How its works"
              two="Testimonials"
              three="Careers"
              four="Investors"
              five="Terms of service"
            />

            <Section
              head="Contact Us"
              one="Contact"
              two="Support"
              three="Destinations"
              four="Sponsorship"
            />

            <Section
              head="Videos"
              one="Submit Videos"
              two="Ambassadors"
              three="Agency"
              four="Influencer"
            />

            <Section
              head="Social Media"
              one="Instagram"
              two="facebook"
              three="Youtube"
              four="Twitter"
            />
          </Row>

          <SocialMedia />
        </Container>
      </Container>
    </>
  );
};

export default Footer;
