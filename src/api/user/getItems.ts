import { GetItems } from "../../types/interfaces"
export const getItems = async ({ currentPage, pageSize, isSort, itemName }:GetItems) => {
    const response = await fetch(`${process.env.REACT_APP_API}/api/wh/items?page=${currentPage}&pageSize=${pageSize}&sortOrder=${isSort ? 'ASC' : 'DESC'}${itemName ? `&itemName=${itemName}` : ''}`, {
        headers: {
            'Authorization': localStorage.getItem('access_token') || '',
            'Content-Type': 'application/json',
        }
    })
    
    return response
}