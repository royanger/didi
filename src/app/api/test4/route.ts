import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export const runtime = "edge";


export async function GET(req: NextRequest) {
	const user = await currentUser()

	console.log('user', user)

	return NextResponse.json({ status: 200, data: "Success" });
}
