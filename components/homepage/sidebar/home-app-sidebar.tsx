
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../../ui/sidebar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaBowlFood } from "react-icons/fa6";
import {  RiDrinks2Fill } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport, TbTableSpark } from "react-icons/tb";
import { Home } from 'lucide-react';
import SignOutButton from './sign-out-btn';
import { auth } from '@/lib/auth';


 async function HomeAppSidebar() {
  const session = await auth()
  return (
    <Sidebar variant="inset" className='p-4'>
      <SidebarHeader>
        <Button variant={'secondary'}>SYSTEM POS</Button>
      </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {session?.user.role === 'admin' && <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/dashboard'}>
                      <MdOutlineDashboard />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/'}>
                      <Home />
                      <span>Homepage</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
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
                      <span>Beverages</span>
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
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={'/reports'}>
                      <TbReport />
                      <span>Reports</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SignOutButton />
        </SidebarFooter>
    </Sidebar>
  )
}

export default HomeAppSidebar