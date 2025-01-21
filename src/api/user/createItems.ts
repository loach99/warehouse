import { IEditValue } from "../../types/interfaces";

export const createItems = async (data: IEditValue) => {
    const response = await fetch(`/api/wh/items`, {
        method: 'POST',
        headers: {
            'Authorization': `${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: data.name,
            description: data.description,
            measurement_units: data.measurement_units,
            code: data.code
        })
    })
    return response;
};