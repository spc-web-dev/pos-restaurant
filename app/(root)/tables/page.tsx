import TableContainer from '@/components/homepage/tables/table-container'
import { getTables } from '@/lib/actions/tables-action';



async function page() {
  const tables = await getTables();
  return (
    <div>
        <TableContainer tables={tables} />
    </div>
  )
}

export default page