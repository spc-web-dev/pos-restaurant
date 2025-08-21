'use server'

import z from "zod"
import { tableSchema } from "../types"
import { auth } from "../auth"

export const getTables = async (): Promise<z.infer<typeof tableSchema>[]> =>{
    const session = await auth()
    try {
        const GATEWAY_URL = process.env.GATEWAY_URL
        const res = await fetch(`${GATEWAY_URL}/tables`, {
            headers: {
                'Authorization': `Bearer ${session?.user?.accessToken}`,
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unexpected error occurred'
        console.error('Error fetching tables:', message)
        return []
    }
}