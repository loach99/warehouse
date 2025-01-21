import { IEditValue } from "../../types/interfaces";

export const patchItem = async (data: IEditValue) => {
    const response = await fetch(`${process.env.REACT_APP_API}/api/wh/items/${data.id}`, {
        method: 'PATCH',
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