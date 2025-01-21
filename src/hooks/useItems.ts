import { useEffect } from 'react';
import { IItems, IUseItems } from '../types/interfaces';
import { getItems } from '../api/user/getItems';
import { useError } from './useError';
const useItems = ({ currentPage, pageSize, isSort, itemName, isEdit }: IUseItems) => {
    const { loading, setLoading, error, setError, data, setData } = useError<IItems>({ result: [], total: 0 });
    useEffect(() => {
        try {
            setLoading(true);
            getItems(currentPage, pageSize, isSort, itemName)
                .then((result) => {
                    if (result.ok) {
                        result.json()
                            .then((data) => {
                                setData(data);
                                setLoading(false);
                                setError(false);
                            });
                    } else {
                        setError(true);
                        setLoading(false);
                    }
                })
        } catch (error) {
            setError(true);
        }

    }, [currentPage, pageSize, isSort, itemName, isEdit]);
    return {
        data,
        error,
        loading
    };
};

export default useItems;
