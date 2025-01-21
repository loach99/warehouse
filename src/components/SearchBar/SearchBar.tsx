import { useForm } from "react-hook-form";
import styles from "./styles/SearchBar.module.scss";
import { ISearchBar } from "../../types/interfaces";

const SearchBar = ({setItemName}:ISearchBar) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => setItemName(data.search);
    return (
        <div className={styles.searchBar}>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input {...register('search')} placeholder="Поиск по названию" type="text" />
                <button>Поиск</button>
            </form>

        </div>
    );
}

export default SearchBar;