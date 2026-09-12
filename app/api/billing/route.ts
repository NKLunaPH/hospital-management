import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({
    message: "Billing API",
    data: [],
    requestUrl: request.url,
  });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  return Response.json({ success: true, payload }, { status: 201 });
}
