import type { User } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

type ApiResponse =
  | { status: 200; data: User }
  | { status: 401; message: string };

const userAuth = async (): Promise<ApiResponse> => {
  const user = await currentUser();

  if (!user) {
    return { status: 401, message: "Unauthorized" };
  }
  return { status: 200, data: user };
};

export default userAuth;
