import { createPortal } from "react-dom";
import styles from './styles/EditModal.module.scss'
import logo from '../../../assets/MiscIcons/Feature.svg'
import close from '../../../assets/Buttons/closeIcon.svg'
import { useForm } from "react-hook-form";
import { IEditModal, IEditValue, IItems } from "../../../types/interfaces";
import { useEffect } from "react";
import { patchItem } from "../../../api/user/patchItem";
import { createItems } from "../../../api/user/createItems";
import { useError } from "../../../hooks/useError";
import ErrModal from "../ErrModal/ErrModal";

const modalElem = document.getElementById('modal');
const EditModal = ({ isModalOpen, setIsModalOpen, editHolders, setIsEdit, isCreate }: IEditModal) => {
    const { setLoading, error, setError } = useError<IItems>({ result: [], total: 0 });
    const { register, handleSubmit, reset } = useForm({
        defaultValues: editHolders
    });

    useEffect(() => {
        reset(editHolders);
    }, [editHolders, reset]);

    if (!modalElem) {
        return null;
    }
    const handleModalClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
            setError(false);
        }
    };
    const onSubmit = (data: IEditValue) => {
        if (isCreate) {
            try {
                setLoading(true);
                createItems(data)
                    .then(res => {
                        if (res.ok) {
                            setIsModalOpen(false)
                            setIsEdit(true)
                            setLoading(false)
                            setError(false)
                        } else {
                            setError(true)
                            setLoading(false)
                        }
                    })
                setIsEdit(false)

            } catch (error) {
                setError(true)
            }
            return;
        }
        try {
            setLoading(true);
            patchItem(data)
                .then(res => {
                    if (res.ok) {
                        setIsModalOpen(false)
                        setIsEdit(true)
                        setLoading(false)
                        setError(false)
                    } else {
                        setError(true)
                        setLoading(false)
                    }
                })
        } catch (error) {
            setError(true)
        }

    };
    const handleConfirmClick = () => {
        handleSubmit(onSubmit)();
    };

    return createPortal(
        (
            <div className={isModalOpen ? styles.modalWindow : styles.modalWindow__close} onClick={handleModalClick}>
                <div className={isModalOpen ? styles.modal : styles.modal__close}>
                    <div>
                        <div className={styles.modal__logo}>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <img onClick={() => setIsModalOpen(false)} src={close} alt="" />
                            </div>
                        </div>
                        {error ?
                           <ErrModal/>
                            :
                            <div className={styles.modal__content}>
                                <div>
                                    <h3>{editHolders.name ? editHolders.name : 'Новая позиция'}</h3>
                                    <p>Заполните все поля для создания новой номенклатуры</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className={styles.modal__form} action="">
                                    <div>
                                        <div>
                                            <label htmlFor="name">Название</label>
                                            <input type="text" id="name"  {...register('name')} />
                                        </div>
                                        <div>
                                            <label htmlFor="units">Единицы измерения</label>
                                            <input type="text" id="measurement_units" {...register('measurement_units')} />
                                        </div>
                                        <div>
                                            <label htmlFor="code">Артикул/код</label>
                                            <input type="text" id="code"  {...register('code')} />
                                        </div>
                                        <div>
                                            <label htmlFor="desc">Описание</label>
                                            <textarea id="description"  {...register('description')} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        }

                    </div>
                    <div className={styles.modal__buttons}>
                        <button onClick={() => setIsModalOpen(false)}>Отмена</button>
                        <button onClick={handleConfirmClick}>Подтвердить</button>
                    </div>
                </div>
            </div>
        ), modalElem
    )
}

export default EditModal;