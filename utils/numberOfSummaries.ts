import { getSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function numberOfSummaries() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("/sign-in");
  }
  const summaries = await getSummaries(userId);

  return summaries.length;
}
