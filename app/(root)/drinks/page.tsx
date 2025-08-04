import DrinkCard from '@/components/homepage/drinks/drink-card'


function page() {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="mb-4">
            <DrinkCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page