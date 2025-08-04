import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../../ui/sidebar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { TbTableSpark } from "react-icons/tb";

function HomeAppSidebar() {
  return (
    <Sidebar variant="inset" className='p-4'>
      <SidebarHeader>
        <Button variant={'secondary'}>SYSTEM POS</Button>
      </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/foods'}>
                      <FaBowlFood />
                      <span>Foods</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/drinks'}>
                      <RiDrinks2Fill />
                      <span>Drinks</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/tables'}>
                      <TbTableSpark />
                      <span>Tables</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Button>avatar</Button>
        </SidebarFooter>
    </Sidebar>
  )
}

export default HomeAppSidebar