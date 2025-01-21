import styles from "./styles/Table.module.scss";
import pen from "../../assets/Buttons/Icon.svg";
import { TableProps } from "../../types/interfaces";
import ErrModal from "../Modals/ErrModal/ErrModal";
const Table = ({ items, setIsSort, isSort, setIsModalOpen, setEditHolders, error, loading }: TableProps) => {
    const handleEdit = (id: string, name: string, description: string, measurement_units: string, code: string) => {
        setEditHolders({ id, name, description, measurement_units, code })
        setIsModalOpen(true)
    }
    if (error) {
        return <div className={styles.table__err}>
            <ErrModal />
        </div>
    }

    return (

        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={isSort ? styles.table__name : styles.table__name__active} onClick={() => setIsSort(!isSort)}>Название</th>
                    <th>Единица измерения</th>
                    <th>Артикул/код</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.measurement_units}</td>
                        <td>{item.code}</td>
                        <td>
                            <div onClick={() => handleEdit(item.id, item.name, item.description, item.measurement_units, item.code)} className={styles.table__edit}>
                                <img src={pen} alt="Редактировать" />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;