import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
} from "../common/MotionWrapper";
import {
  containerVariants,
  itemVariants,
  buttonVariants,
} from "@/utils/constants";

const HeroSection = () => {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl"
    >
      <MotionH1 variants={itemVariants} className="font-bold py-6 text-center">
        Instantly Summarize Your PDFs
      </MotionH1>
      <MotionH2
        variants={itemVariants}
        className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600"
      >
        Turn lengthy documents into clear, concise summaries with the power of
        AI.
      </MotionH2>
      <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
        <Button
          variant="link"
          className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-blue-900 to-blue-500 hover:from-blue-500 hover:to-blue-900 hover:no-underline font-bold shadow-lg transition-all duration-300"
        >
          <Link href="/upload" className="flex gap-2 items-center">
            <span>Try DocDigest</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </MotionDiv>
    </MotionSection>
  );
};
export default HeroSection;
