'use client'

import SearchBoxMobile from "./search-box-mobile"
import SearchBoxPC from "./search-box-pc"

function SearchBoxContainer() {
  return (
    <div>
        <SearchBoxPC />
        <SearchBoxMobile />
    </div>
  )
}

export default SearchBoxContainer