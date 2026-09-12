import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return Response.json({
    message: "Patient detail API",
    id,
    requestUrl: request.url,
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const payload = await request.json();
  return Response.json({ success: true, id, payload }, { status: 200 });
}
