export interface IItem{
    id: string
    name: string
    accounting_price: number | null
    description: string
    measurement_units: string
    min_quantity: number | null
    price: number | null
    rent_price: number | null
    type: string | null
    code: string
    custom_values: Array<unknown>
    deposit: string | null
}

export interface IItems{
    total: number
    result: IItem[]

}

export interface TableProps {
    items: IItem[]; 
    setIsSort: (value: boolean) => void; 
    isSort: boolean; 
    setIsModalOpen: (value: boolean) => void
    setEditHolders: (value: IEditValue) => void
    error: boolean
    loading: boolean
}
export interface IPagination {
    total: number
    pageSize: number
    setPageSize: (pageSize: number) => void
    setCurrentPage: (page: number) => void
    currentPage: number
}
export interface ISearchBar {
    setItemName: (value: string) => void
}
export interface IEditModal {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
    editHolders: IEditValue
    setIsEdit: (value: boolean) => void
    isCreate: boolean
}
export type IEditValue = Omit<IItem, 'custom_values' | 'deposit' | 'rent_price' | 'price' | 'accounting_price' | 'min_quantity' | 'type'>

export interface IUsePagination {
  total: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
}

export interface IUseItems {
    currentPage: number;
    pageSize: number;
    isSort: boolean;
    itemName: string;
    isEdit: boolean
}
export interface IUseActivePage {
  initialPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}