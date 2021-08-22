import GalCom from "./GalCom"

const ImgGal = () => {
    return (
        <>
            <GalCom
            img="gal11"
            imgOne="gal11"
            imgTwo="gal12"
            imgThree="gal13"
            dark="dark"
             />
            <GalCom 
            order={2}
            img="gal11"
            imgOne="gal11"
            imgTwo="gal12"
            imgThree="gal13"/>
            <GalCom
            img="gal11"
            imgOne="gal11"
            imgTwo="gal12"
            imgThree="gal13"
            dark="dark"
            />
        </>
    )
}

export default ImgGal
