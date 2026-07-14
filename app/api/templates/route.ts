import { NextRequest } from "next/server";
import browserData from "@/src/data/browserData.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category");

  let templates = browserData.templates;

  if (category && category !== "all") {
    templates = templates.filter(
      (t) => t.category.toLowerCase() === category.toLowerCase()
    );
  }

  return Response.json({
    success: true,
    data: templates,
    total: templates.length,
  });
}
