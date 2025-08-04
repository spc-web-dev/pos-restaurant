
import RootLayout from "@/components/homepage/root-layout";

export default function Layout({ children }: { children : React.ReactNode }){
 
    return (
        <>
            <RootLayout>{children}</RootLayout>
        </>
    )
}
