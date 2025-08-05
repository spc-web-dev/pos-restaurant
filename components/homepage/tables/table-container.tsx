import React from 'react'
import TableCard from './table-card'

function TableContainer() {
  return (
    <div className='flex flex-wrap gap-4 justify-center w-full'>
      {Array.from({ length: 15 }).map((_, index) => (
        <TableCard key={index} />
      ))}
    </div>
  )
}

export default TableContainer