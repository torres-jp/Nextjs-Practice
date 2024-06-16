import { signupSchema } from "@/schemas/auth.schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const result = signupSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error);
  }

  return NextResponse.json(result.data);
}
