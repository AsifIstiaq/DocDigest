import BgGradient from "@/components/common/BgGradient";
import { MotionDiv } from "@/components/common/MotionWrapper";
import { SourceInfo } from "@/components/summaries/SourceInfo";
import { SummaryHeader } from "@/components/summaries/SummaryHeader";
import { SummaryViewer } from "@/components/summaries/SummaryViewer";
import { getSummaryById } from "@/lib/summaries";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const summary = await getSummaryById(id);

  if (!summary) {
    notFound();
  }

  const {
    title,
    summary_text,
    file_name,
    word_count,
    createdAt,
    original_file_url,
  } = summary;

  const readingTime = Math.ceil((word_count || 0) / 200);

  return (
    <div className="relative isolate min-h-screen bg-linear-to-b from-blue-50/40 to-white">
      <BgGradient className="from-blue-400 via-blue-300 to-blue-200" />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <SummaryHeader
              title={title}
              createdAt={createdAt}
              readingTime={readingTime}
            />

            {file_name && (
              <SourceInfo
                title={title}
                summaryText={summary_text}
                fileName={file_name}
                createdAt={createdAt}
                originalFileUrl={original_file_url}
              />
            )}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-4 sm:mt-8 lg:mt-16"
            >
              <div className="relative p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-blue-100/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-blue-50/30 to-transparent opacity-50 rounded-2xl sm:rounded-3xl" />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs">
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  {word_count?.toLocaleString()} words
                </div>
                <div className="relative mt-8 sm:mt-6 flex justify-center">
                  <SummaryViewer summary={summary.summary_text} />
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
