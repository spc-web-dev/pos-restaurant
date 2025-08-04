'use client'
import { Input } from "@/components/ui/input"



function SearchBoxPC() {
  return (
    <div className="lg:flex items-center hidden">
        <Input type="text" placeholder="Search..." className="md:min-w-sm"/>
    </div>
  )
}

export default SearchBoxPC