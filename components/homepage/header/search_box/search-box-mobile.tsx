import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


function SearchBoxMobile() {
  return (
    <div className="lg:hidden flex items-center">
      <Button variant={'outline'} className="cursor-pointer"><Search /></Button>
    </div>
  )
}

export default SearchBoxMobile