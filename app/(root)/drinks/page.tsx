import DrinkCard from '@/components/homepage/drinks/drink-card'
import { getProductsByType } from '@/lib/actions/products-action'


async function page() {
  const beverages = await getProductsByType("beverage")
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {beverages.map((beverage) => (
          <div key={beverage.id} className="mb-4">
            <DrinkCard props={beverage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page