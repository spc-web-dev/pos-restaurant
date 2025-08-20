
import RecentOrders from "./recent-orders"
import TotalCard from "./total-card"

async function HomepageContainer() {

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <TotalCard title="Total Revenue" total={2847.5} change={12.5} />
        <TotalCard title="Total Orders" total={150} change={5} />
        <TotalCard title="Total Customers" total={120} change={2} />
      </div>
      <RecentOrders />
    </div>
  )
}

export default HomepageContainer