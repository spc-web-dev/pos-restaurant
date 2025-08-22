"use client"

import * as React from "react"
import { getTables } from "@/lib/actions/tables-action"
import z from "zod"
import { tableSchema } from "@/lib/types"
import { toast } from "sonner"


export default function SelectTable({setTableId }: { setTableId: React.Dispatch<React.SetStateAction<number | 0>> }) {
  const [tables, setTables] = React.useState<z.infer<typeof tableSchema>[]>([])

  React.useEffect(()=>{
    const fetchTables = async () => {
      const {data, message, error} = await getTables()
      if (data.length === 0 && error) {
        setTables([])
        toast.error("Failed to fetch tables",{
          description: message
        })
        return
      }
      setTables(data)
    }
    fetchTables()
  }, [])

  return (
    <select name="table" id="table" className="max-w-sm w-sm border p-2 rounded-md" onChange={(e) => setTableId(Number(e.target.value))}>
      <option value={0} className="dark:bg-gray-900">Select table...</option>
      {tables.map((table) => (
        <option key={table.id} value={table.id} className="dark:bg-gray-900">
          {table.name}
        </option>
      ))}
    </select>
  )
}
