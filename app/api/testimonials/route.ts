import browserData from "@/src/data/browserData.json";

export async function GET() {
  return Response.json({
    success: true,
    data: browserData.testimonials,
    total: browserData.testimonials.length,
  });
}
