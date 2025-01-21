import { IEditValue } from "../../types/interfaces";

export const patchItem = async (data: IEditValue) => {
    const response = await fetch(`https://hcateringback-dev.unitbeandev.com/api/wh/items/${data.id}`, {
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