import classes from './ConfirmWithText.module.css'

const ConfirmWithText = ({onCancel, onConfirm, titleText, cancelText, confirmText}) => {
    return (
        <div className= {classes.confirmWithTextConteriner} >
            <h1 className= {classes.confirmWithTextTextShowing}>{titleText}</h1>
            <div className= {classes.confirmWithTextButtonConteriner} >
                <button onClick={onCancel} className={classes.confirmWithTextCancelButton}> {cancelText} </button>
                <button onClick={onConfirm} className={classes.confirmWithTextConfirmButton}> {confirmText} </button>
            </div>
        </div>
    )
}

export default ConfirmWithText