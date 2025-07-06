import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { MotionDiv } from "../common/MotionWrapper";
import { itemVariants } from "@/utils/constants";

export default function UploadHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <MotionDiv
        variants={itemVariants}
        className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-blue-200 via-blue-500 to-blue-800 animate-gradient-x group"
      >
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Sparkles className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
          <p className="text-base">AI-Powered PDF Summarization</p>
        </Badge>
      </MotionDiv>
      <MotionDiv
        variants={itemVariants}
        className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Start Uploading Your PDF
      </MotionDiv>
      <MotionDiv
        variants={itemVariants}
        className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center"
      >
        <p>Upload your PDF and get the digestible summary!</p>
      </MotionDiv>
    </div>
  );
}
