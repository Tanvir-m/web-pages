import style from '../../css/style.module.scss';

const ImageComponent = (props) => {
    return (
        <>
            
                <img
                className={`${style.padNon}`}
                src={props.img}
                alt={props.alt}
                classname={style.img}
                width="100%"
                height={props.height} />

                <h6 className={`p-4 ${style.text}`}>{props.text}</h6>
            
        </>
    )
}

export default ImageComponent
