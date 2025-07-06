import BgGradient from "@/components/common/BgGradient";
import { MotionDiv } from "@/components/common/MotionWrapper";
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/UploadForm";
import { containerVariants } from "@/utils/constants";
import numberOfSummaries from "@/utils/numberOfSummaries";

export default async function Page() {
  const summaries = await numberOfSummaries();
  return (
    <section className="min-h-screen">
      <BgGradient />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          <UploadForm summaries={summaries} />
        </div>
      </MotionDiv>
    </section>
  );
}
