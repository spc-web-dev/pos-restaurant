import FoodCard from "@/components/homepage/foods/food-card"
import { getProductsByType } from "@/lib/actions/products-action"


async function page() {
  const foods = await getProductsByType("food")
  return (
    <div className='flex justify-center items-center'>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {foods.map((food) => (
          <FoodCard key={food.id} props={food} />
        ))}
      </div>
    </div>
  )
}

export default page