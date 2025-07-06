import BgGradient from "@/components/common/BgGradient";
import SummaryCard from "@/components/summaries/SummaryCard";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import EmptySummaryState from "@/components/summaries/EmptySummaryState";
import { MotionDiv, MotionH1 } from "@/components/common/MotionWrapper";
import { itemVariants } from "@/utils/constants";
import { Summary } from "@/utils/summaries";

export default async function DashboardPage() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("/sign-in");
  }
  const uploadLimit = 5;
  const summaries: Summary[] = await getSummaries(userId);
  return (
    <main className="min-h-screen">
      <BgGradient className="from-blue-400 via-blue-300 to-blue-200" />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-4"
      >
        <div className="px-2 py-12 sm:py-24">
          <div className="flex gap-4 mb-8 justify-between">
            <div className="flex flex-col gap-2">
              <MotionH1
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent"
              >
                Your Summaries
              </MotionH1>
            </div>
            {summaries.length < uploadLimit && (
              <MotionDiv
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="self-start"
              >
                <Button
                  variant={"link"}
                  className="bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-300 group hover:no-underline"
                >
                  <Link href="/upload" className="flex items-center text-white">
                    <Plus className="w-5 h-5 mr-2" />
                    New Summary
                  </Link>
                </Button>
              </MotionDiv>
            )}
          </div>
          {summaries.length < uploadLimit ? (
            <div className="mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
                <p className="text-sm">
                  A maximum of five summaries can be uploaded.
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-800">
                <p className="text-sm">
                  You have reached the upload limit. Please delete an existing
                  summary to upload a new one.
                </p>
              </div>
            </div>
          )}
          {summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </MotionDiv>
    </main>
  );
}
