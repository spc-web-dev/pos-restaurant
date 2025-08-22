
import z from "zod";

export const productSchema = z.object({
    id: z.number().min(1),
    name: z.string().min(2).max(100),
    type: z.string().min(2).max(50),
    descriptions: z.string(),
    price: z.number().min(0),
    image: z.string().optional(),
    status: z.enum(['available', 'unavailable']),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export const tableSchema = z.object({
    id: z.number().min(1),
    name: z.string().min(2).max(100),
    capacity: z.number().min(1),
    image: z.string().optional(),
    status: z.enum(['available', 'unavailable']),
    descriptions: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})


export type TableResponseType = {
    message: string;
    error: boolean;
    data: z.infer<typeof tableSchema>[];
}