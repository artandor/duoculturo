import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new NextResponse(JSON.stringify({"content": 'Hello, Next.js!'}), {headers: {"Content-Type" : "application/json"}})
}
