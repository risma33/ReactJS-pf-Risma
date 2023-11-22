import Spinner from 'react-bootstrap/Spinner';
import classes from './BodyConteiner.module.css'


const BodyConteiner = (props)=> {
    return(
        <div className={classes.bodyConteiner_conteiner}>
            <h1 className={classes.bodyConteiner_title}>{props.text}</h1>
            <div className={classes.bodyConteiner_spinnerConteiner}>
                <Spinner animation="border" style={{color: "#6E99B3", width: "6rem", height:"6rem"}} />
            </div>
            
        </div>
    )
}

export default BodyConteiner