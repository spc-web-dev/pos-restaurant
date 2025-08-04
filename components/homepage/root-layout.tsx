
import HeaderContainer from "@/components/homepage/header/header-container";
import HomeAppSidebar from "@/components/homepage/sidebar/home-app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


export default function RootLayout({ children }: { children : React.ReactNode }){
 
    return (
        <SidebarProvider style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties}
        >
            <HomeAppSidebar />
            <SidebarInset className="p-4">
                <div>
                    <HeaderContainer />
                    <Separator className="my-4 w-full"/>
                    <>{children}</>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
