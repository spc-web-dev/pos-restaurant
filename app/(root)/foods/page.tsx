import FoodCard from "@/components/homepage/foods/food-card"


function page() {
  return (
    <div className='flex justify-center items-center'>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {Array.from({ length: 10 }).map((_,ind)=>(<FoodCard key={ind} />))}
      </div>
    </div>
  )
}

export default page