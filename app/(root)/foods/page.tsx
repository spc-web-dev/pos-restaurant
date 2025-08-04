import FoodCard from "@/components/homepage/foods/food-card"


function page() {
  return (
    <div className='flex justify-center'>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {Array.from({ length: 10 }).map((_,ind)=>(<FoodCard key={ind} />))}
      </div>
    </div>
  )
}

export default page