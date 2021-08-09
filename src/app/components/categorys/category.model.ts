export interface Category {
    id?: number
    name: string
    description?: string
    products?: [
        {
            idProduct?: number, 
            productName:string, 
            price: string
        }
    ]
}