"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import SearchBoxContainer from "./search_box/search-box-container";
import { usePathname, useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import ListOrderedButton from "./list-ordered-button";

function HeaderContainer() {
    const usepathname = usePathname()
    const query = useSearchParams()
    const pathname = usepathname.split('/')[1].toUpperCase()
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-4 h-5">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <Label>{pathname}</Label>
      </div>
      <div className="flex items-center gap-2">
        <ListOrderedButton />
        <SearchBoxContainer />
      </div>
    </div>
  );
}

export default HeaderContainer;
