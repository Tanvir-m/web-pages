import {Row, Col} from 'react-bootstrap';
import style from '../css/style.module.scss';
import {GiFoodTruck} from 'react-icons/gi';

const CardCom = ()=>{
    return(
        <>
            <Row className="py-4">
                <Col sm={2}><GiFoodTruck className={`${style.healthIcon}`} /></Col>
                <Col sm={10} className="text-left">
                    <p className={`${style.padMar} ${style.textGreen} ${style.ral}`}>Lorem Ipsum is simply dummy text of the printing</p>
                    <h4 className={`${style.ral}`}>Good For Your Health</h4>
                </Col>
            </Row>
        </>
    )
};

export default CardCom;