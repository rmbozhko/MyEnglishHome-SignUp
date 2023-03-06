import c from './Modal.module.css';
import congrats from '../../images/congrats.png';
import trouble from '../../images/trouble.png'

export const Modal = ({ isSuccess, setIsModalVisible }) => {
    return (
        <div className={c.modal} onClick={() => setIsModalVisible(false)}>
            <div>
                {isSuccess ? <p className={c.congrats}>Вітаємо!</p> : <p className={c.trouble}>От халепа!</p>}
                {isSuccess ? <p className={c.success}>ви успішно зареєстровані</p> : <p className={c.fail}>сталася помилка<br></br>спробуйте пізніше</p>}
                <img className={isSuccess ? c.image : c.imageTrouble} src={isSuccess ? congrats : trouble} alt="congrats"></img>
            </div>
        </div>
    )
}
