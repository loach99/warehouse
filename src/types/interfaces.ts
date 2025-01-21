
export interface IUser {
    email: string;
    password: string;
}

export interface IItem {
    id: string;
    name: string;
    accounting_price: number;
    description: string;
    measurement_units: string;
    min_quantity: number;
    price: number;
    rent_price: number;
    type: string;
    code: string;
    custom_values: unknown[];
    deposit: string;
}

export interface IItems {
    total: number;
    result: IItem[];
}

export interface ITableProps {
    items: IItem[];
    setIsSort: (value: boolean) => void;
    isSort: boolean;
    setIsModalOpen: (value: boolean) => void;
    setEditHolders: (value: IEditValue) => void;
    error: boolean;
    loading: boolean;
}

export interface IPagination {
    total: number;
    pageSize: number;
    currentPage: number;
    setPageSize: (pageSize: number) => void;
    setCurrentPage: (page: number) => void;
}

export interface ISearchBar {
    setItemName: (value: string) => void;
}

export interface IEditModal {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    editHolders: IEditValue;
    setIsEdit: (value: boolean) => void;
    isCreate: boolean;
}

export type IEditValue = Omit<
    IItem,
    'custom_values' | 'deposit' | 'rent_price' | 'price' | 'accounting_price' | 'min_quantity' | 'type'>;

export type GetItems = Omit<IUseItems, 'isEdit'>;

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
    isEdit: boolean;
}
export interface IUseActivePage {
    initialPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}
