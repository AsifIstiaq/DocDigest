"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  totalSummaries: number;
}

const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(
  ({ onSubmit, isLoading, totalSummaries }, ref) => {
    const uploadLimit = 5;
    const isLimitReached = totalSummaries >= uploadLimit;
    return (
      <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex justify-end items-center gap-1.5">
          <Input
            type="file"
            id="file"
            name="file"
            accept="application/pdf"
            required
            className={cn(
              (isLoading || isLimitReached) && "opacity-50 cursor-not-allowed"
            )}
            disabled={isLoading || isLimitReached}
          />
          <Button disabled={isLoading || isLimitReached}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : isLimitReached ? (
              "Limit Reached"
            ) : (
              "Upload your PDF"
            )}
          </Button>
        </div>
      </form>
    );
  }
);

UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput;
