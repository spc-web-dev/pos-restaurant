import TableContainer from '@/components/homepage/tables/table-container'
import { getTables } from '@/lib/actions/tables-action';
import { toast } from 'sonner';

async function page() {
  const { data,error,message } = await getTables();
  if(error) toast.error("Error when fetching tables",{
    description: message
  })
  return (
    <div>
        <TableContainer tables={data} />
    </div>
  )
}

export default page