import { useState } from "react";
export const useError = <T>(initialValue: T) => {
    const [data, setData] = useState<T>(initialValue);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    return {
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
    };
}