import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./styles/TablePage.module.scss";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import EditModal from "../../components/Modals/EditModal/EditModal";
import { authUser } from "../../api/auth/authUser";
import useModal from "../../hooks/useModal";
import useItems from "../../hooks/useItems";
import Table from "../../components/Table/Table";
import ErrModal from "../../components/Modals/ErrModal/ErrModal";
const TablePage = () => {
    const initialState = {
        id: '',
        name: '',
        description: '',
        measurement_units: '',
        code: '',
    }
    const [pageSize, setPageSize] = useState<number>(Number(localStorage.getItem('pageSize')) || 10);
    const [currentPage, setCurrentPage] = useState<number>(Number(localStorage.getItem('page')) || 1);
    const [isSort, setIsSort] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [itemName, setItemName] = useState<string>('');
    const {
        isModalOpen,
        setIsModalOpen,
        editHolders,
        setEditHolders,
        isCreate,
        setIsCreate
    } = useModal();

    useEffect(() => {
        authUser('admin', 'admin')
    }, [])

    const { data: { result: items, total }, error, loading } = useItems({ currentPage, pageSize, isSort, itemName, isEdit });
    return (
        <div className={styles.table}>
            <div className={styles.table__header}>
                <div>
                    <h1>Номенклатура</h1>
                    <div className={styles.table__total}>
                        {total} единиц
                    </div>
                </div>
                <div className={styles.table__search}>
                    <SearchBar setItemName={setItemName} />
                    <div onClick={() => {
                        setIsModalOpen(true)
                        setEditHolders(initialState)
                        setIsCreate(true)
                    }}>
                        <button>Новая позиция</button>
                    </div>
                </div>
            </div>
            {loading ? <div className={styles.loader}>Loading...</div> :
                <Table
                    error={error}
                    loading={loading}
                    items={items}
                    setIsSort={setIsSort}
                    isSort={isSort}
                    setIsModalOpen={setIsModalOpen}
                    setEditHolders={setEditHolders} />
            }

            <Pagination
                total={total}
                pageSize={pageSize}
                setPageSize={setPageSize}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
            <EditModal
                editHolders={editHolders}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setIsEdit={setIsEdit}
                isCreate={isCreate} />
        </div>
    );
}

export default TablePage;