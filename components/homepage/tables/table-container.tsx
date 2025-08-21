import React from 'react'
import TableCard from './table-card'
import { tableSchema } from '@/lib/types'
import z from 'zod'

function TableContainer({ tables }: {
  tables: z.infer<typeof tableSchema>[]
}) {
  return (
    <div className='flex flex-wrap gap-4 justify-center w-full'>
      {tables.map((table) => (
        <TableCard key={table.id} props={table} />
      ))}
    </div>
  )
}

export default TableContainer