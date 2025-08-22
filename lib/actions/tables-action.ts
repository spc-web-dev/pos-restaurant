'use server'

import { TableResponseType } from "../types"
import { auth } from "../auth"

export const getTables = async (): Promise<TableResponseType> =>{
    const session = await auth()
    try {
        const GATEWAY_URL = process.env.GATEWAY_URL
        const res = await fetch(`${GATEWAY_URL}/tables`, {
            headers: {
                'Authorization': `Bearer ${session?.user?.accessToken}`,
            }
        })
        if (!res.ok) {
            const message = await res.text()
            return { message, error: true, data: [] }
        }
        const { data, message, error }= await res.json()
        return { message: message, error, data}
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unexpected error occurred'
        return { message, error: true, data: [] }
    }
}

export const getTableByName = async (tableName: string): Promise<TableResponseType>=>{
    const session = await auth()
    try {
        const GATEWAY_URL = process.env.GATEWAY_URL
        const res = await fetch(`${GATEWAY_URL}/tables?table_name=${tableName}`, {
            headers: {
                'Authorization': `Bearer ${session?.user?.accessToken}`,
            }
        })
        if (!res.ok) {
            const message = await res.text()
            return { message, error: true, data: [] }
        }
        const { data, message, error }= await res.json()
        return { message: message, error, data}
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unexpected error occurred'
        return { message, error: true, data: [] }
    }
}