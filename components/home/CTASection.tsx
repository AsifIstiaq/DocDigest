import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionSection,
} from "../common/MotionWrapper";
import { containerVariants } from "@/utils/constants";

export default function CTASection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-50 py-12"
    >
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <MotionH2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-5"
            >
              Spend less time reading and more time discovering.
            </MotionH2>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              DocDigest uses advanced AI to distill academic papers, research
              reports, and study material into clear, digestible summaries.
            </MotionP>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                size="lg"
                variant={"link"}
                className="w-full min-[400px]:w-auto bg-linear-to-r from-blue-900 to-blue-500 hover:from-blue-500 hover:to-blue-900 hover:text-white hover:scale-105 text-white transition-all duration-300
                hover:no-underline
                "
              >
                <Link
                  href="/upload"
                  className="flex items-center justify-center"
                >
                  Get Started{" "}
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
