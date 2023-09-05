import { currentUser } from "@clerk/nextjs";
import { NextRequest } from "next/server";

export const runtime = "edge";
export async function GET(req: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return { status: 401, message: "Unauthorized" };
  }
  return { status: 200, data: user };
}
