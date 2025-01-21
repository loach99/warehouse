export const getItems = async (currentPage: number, pageSize: number, isSort: boolean, itemName?: string) => {
    const response = await fetch(`/api/wh/items?page=${currentPage}&pageSize=${pageSize}&sortOrder=${isSort ? 'ASC' : 'DESC'}${itemName ? `&itemName=${itemName}` : ''}`, {
        headers: {
            'Authorization': localStorage.getItem('access_token') || ''
        }
    })
    
    return response
}