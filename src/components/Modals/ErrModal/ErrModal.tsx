import styles from './styles/ErrModal.module.scss'
import err from '../../../assets/MiscIcons/free-icon-alert-4493789.png'
const modalElem = document.getElementById('modal');
const ErrModal = () => {
    if (!modalElem) return null
    return (
        <div className={styles.modal__error}>
            <div>
                <img src={err} alt="" />
            </div>
            <div>
                <p>
                    Возникла непредвиденная ошибка, пожалуйста обновите страницу и попробуййте позже...
                </p>
            </div>
        </div>
    )
}

export default ErrModal;