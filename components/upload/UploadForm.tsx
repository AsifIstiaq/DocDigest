"use client";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./UploadFormInput";
import { z } from "zod";
import { toast } from "sonner";
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "@/actions/UploadActions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm({ summaries }: { summaries: number }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("Uploaded Successfully");
    },
    onUploadError: (err) => {
      toast.error("Error occurred while uploading", {
        description: err.message,
      });
    },
    onUploadBegin: (upload) => {
      console.log("Upload has begun for", upload);
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;

      const validatedFields = schema.safeParse({ file });

      if (!validatedFields.success) {
        toast.error("Something went wrong", {
          description:
            validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file",
          icon: "❌",
          className: "bg-red-100 text-red-800 border border-red-300",
        });
        setIsLoading(false);
        return;
      }

      toast.success("Uploading PDF...", {
        description: "Your PDF is currently being uploaded.",
      });

      const resp = await startUpload([file]);
      if (!resp) {
        toast.error("Something went wrong", {
          description: "Please use a different file",
          icon: "❌",
          className: "bg-red-100 text-red-800 border border-red-300",
        });
        setIsLoading(false);
        return;
      }
      toast.success("Processing PDF", {
        description: "Please hold on while our AI processes your document.",
      });

      const result = await generatePdfSummary(resp);

      const { data = null } = result || {};

      if (data) {
        toast.success("Saving PDF...", {
          description: "Please hold on while we save your summary.",
        });

        if (data.summary) {
          const storeResult = await storePdfSummaryAction({
            summary: data.summary,
            fileUrl: resp[0].serverData.file,
            title: data.title,
            fileName: file.name,
          });

          toast("Summary Generated!", {
            description:
              "Your PDF has been successfully processed, summarized, and saved.",
          });

          formRef.current?.reset();
          router.push(`/summaries/${storeResult?.data?.id}`);
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error occurred", error);
      formRef.current?.reset();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
        totalSummaries={summaries}
      />
    </div>
  );
}
