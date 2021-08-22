import { Container, Row, Col } from "react-bootstrap";
import  ImageComponent  from "./Image/ImageComponent";
import style from '../css/style.module.scss';

const Destinations = () => {
    return (
        <>
            <Container fluid>
                <Container>
                    <h2 className={`text-center py-md-5 ${style.desHeading}`}>Check out these EPIC Destinations</h2>
                    <Row className={`text-center`}>
                            <Col md={6} className={`p-4`}>
                                <Row className={`${style.bShadow}`}>
                                    <ImageComponent
                                    height="800px"
                                    img={process.env.PUBLIC_URL + '/img/gal-1.jpg'}
                                    alt={"dal-1"}
                                    text={"Explore the hidden ewaterfall deep inside the amazone jungle"}/>
                                </Row>
                            </Col>
                            <Col md={6} className={`p-4`}>
                                <Row className={style.bShadow}>
                                    <ImageComponent
                                        height="800px"
                                        img={process.env.PUBLIC_URL + '/img/gal-2.jpg'}
                                        alt={"dal-2"}
                                        text={"Explore the hidden ewaterfall deep inside the amazone jungle"}/>
                                </Row>
                            </Col>
                    </Row>

                    <Row>
                            <Col md={4} className={`p-4`}>
                                <Row className={`${style.bShadow}`}>
                                    <ImageComponent
                                    height="300px"
                                    img={process.env.PUBLIC_URL + '/img/gal-3.jpg'}
                                    alt={"dal-1"}
                                    text={"Explore the hidden ewaterfall deep inside the amazone jungle"}/>
                                </Row>
                            </Col>
                            <Col md={4} className={`p-4`}>
                                <Row className={style.bShadow}>
                                    <ImageComponent
                                        height="300px"
                                        img={process.env.PUBLIC_URL + '/img/gal-4.jpg'}
                                        alt={"dal-2"}
                                        text={"Explore the hidden ewaterfall deep inside the amazone jungle"}/>
                                </Row>
                            </Col>
                            <Col md={4} className={`p-4`}>
                                <Row className={style.bShadow}>
                                    <ImageComponent
                                         height="300px"
                                        img={process.env.PUBLIC_URL + '/img/gal-5.jpg'}
                                        alt={"dal-2"}
                                        text={"Explore the hidden ewaterfall deep inside the amazone jungle"}/>
                                </Row>
                            </Col>
                    </Row>

                </Container>
            </Container>
        </>
    )
}

export default Destinations;