import { Container, Row, Col } from "react-bootstrap";
import style from '../css/style.module.scss';
import {AiFillPlayCircle} from 'react-icons/ai';

const Banner = () => {
    return (
        <>
            <Container fluid className={style.banner}>
                <Row>
                    <Col md={{span:8, offset:2}} className={`${style.heading} text-center`}>
                        <h1>ADVENTURE AWAITS</h1>
                        <h4>What Are You Waiting For</h4>
                        <Row>
                            <Col lg={{span:3, offset:3}}>
                                <button className={style.one}>GET STARTED</button>
                            </Col>
                            <Col lg={2}>
                                <button className={style.two}>WATCH TRAILER 
                                    <AiFillPlayCircle 
                                    className={style.Playicon}
                                    />
                                 </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Banner
