import RecentOrders from "./recent-orders"
import TotalCard from "./total-card"


function HomepageContainer() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <TotalCard />
        <TotalCard />
        <TotalCard />
      </div>
      <RecentOrders />
    </div>
  )
}

export default HomepageContainer