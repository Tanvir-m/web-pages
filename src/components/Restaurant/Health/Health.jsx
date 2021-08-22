import {Container, Row, Col} from 'react-bootstrap';
import style from '../css/style.module.scss';
import {AiFillAlert} from 'react-icons/ai'
import CardCom from './CardCom';

const Health = () => {
    return (
        <>
            <Container className=" py-5">
                    <Row className="p-5 text-center">
                    <h5 className={`${style.ral}`}>Lorem Ipsum</h5>
                    <h1 className={`${style.ral} pb-4`}>Good For Your Health</h1>
                    <p className={`${style.ral}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </Row>
                <Row>
                    <Col md={6}>
                        <img 
                        src={process.env.PUBLIC_URL + "/img/health.jpg"} 
                        className={`${style.fullImg}`} alt="" />
                    </Col>
                    <Col md={6} className="mt-5 pt-5">
                        <CardCom />
                        <CardCom />
                        <CardCom />
                        <CardCom />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Health
