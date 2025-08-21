'use server'

import z from "zod"
import { auth } from "../auth"
import { productSchema } from "../types"

export const getProductsByType = async (type: string): Promise<z.infer<typeof productSchema>[]> => {
    const session = await auth()
    try {
        const GATEWAY_URL = process.env.GATEWAY_URL
        const res = await fetch(`${GATEWAY_URL}/products/search?type=${type}`,{
            headers: {
                'Authorization': `Bearer ${session?.user?.accessToken}`,
            }
        })
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching products by type:', error)
        return []
    }
}