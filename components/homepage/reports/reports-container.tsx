'use client'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import ReportsOverview from "./reports-overview";
import { useSearchParams } from "next/navigation";
import ReportsFoods from "./reports-foods";
import ReportsBeverage from "./reports-beverages";

function ReportsContainer() {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "overview";
  return (
    <Tabs defaultValue={tab} className="space-y-4">
      <TabsList className="">
        <TabsTrigger value="overview" className="px-5" asChild>
            <Link href={`/reports?tab=overview`}>
                Overview
            </Link>
        </TabsTrigger>
        <TabsTrigger value="foods" className="px-5" asChild>
            <Link href={`/reports?tab=foods`}>
                Foods
            </Link>
        </TabsTrigger>
        <TabsTrigger value="beverages" className="px-5" asChild>
            <Link href={`/reports?tab=beverages`}>
                Beverages
            </Link>
        </TabsTrigger>
      </TabsList>
      <ReportsOverview />
      <ReportsFoods />
      <ReportsBeverage />
    </Tabs>
  );
}

export default ReportsContainer;
