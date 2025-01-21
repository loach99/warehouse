import { useState } from 'react';
import { IEditValue } from '../types/interfaces';

const initialState = {
    id: '',
    name: '',
    description: '',
    measurement_units: '',
    code: '',
}
const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editHolders, setEditHolders] = useState<IEditValue>(initialState);
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const openModalForCreate = () => {
        setIsModalOpen(true);
        setEditHolders(initialState);
        setIsCreate(true);
    };

    const openModalForEdit = (editData: IEditValue) => {
        setIsModalOpen(true);
        setEditHolders(editData);
        setIsCreate(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return {
        isModalOpen,
        setIsModalOpen,
        editHolders,
        setEditHolders,
        isCreate,
        setIsCreate,
        isEdit,
        setIsEdit,
        openModalForCreate,
        openModalForEdit,
        closeModal,
    };
};

export default useModal;
