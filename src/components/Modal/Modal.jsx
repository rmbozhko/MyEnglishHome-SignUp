import c from './Modal.module.css';
import congrats from '../../images/congrats.png';

export const Modal = ({ setIsModalVisible }) => {
    return (
        <div className={c.modal} onClick={() => setIsModalVisible(false)}>
            <div>
                <p className={c.congrats}>Вітаємо!</p>
                <p className={c.success}>ви успішно зареєстровані</p>
                <img className={c.image} src={congrats} alt="congrats"></img>
            </div>
        </div>
    )
}
