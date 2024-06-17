import { IProduct } from "@/types/product.interface"
import axios from "axios"

const PRODUCTS = 'https://666f4a15f1e1da2be522715c.mockapi.io/products'

export const ProductService = {
    async getAll() {
        const { data } = await axios<IProduct[]>({
            url: PRODUCTS,
            method: 'GET',
        })

        return data
    }
}