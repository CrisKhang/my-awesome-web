import { isAdminAuthenticated } from "@/lib/admin-auth";
import { NO_STORE_HEADERS, revalidateReviewPages } from "@/lib/revalidate-reviews";
import { createReview, listReviews, toPublicReview } from "@/lib/reviews-store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: NO_STORE_HEADERS });
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const approvedOnly = searchParams.get("approved") === "true";

    if (!approvedOnly && !(await isAdminAuthenticated())) {
      return json({ error: "Unauthorized" }, 401);
    }

    const reviews = await listReviews(approvedOnly);

    if (approvedOnly) {
      return json(reviews.map(toPublicReview));
    }

    return json(
      reviews.map((r) => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
      })),
    );
  } catch (err) {
    console.error("GET /api/reviews:", err);
    return json({ error: "Không tải được đánh giá." }, 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().replace(/\s/g, "") : "";
    const content = typeof body.content === "string" ? body.content.trim() : "";
    const rating = Number(body.rating);

    if (!name) {
      return json({ error: "Vui lòng nhập họ tên." }, 400);
    }
    if (!phone || phone.length < 9) {
      return json({ error: "Vui lòng nhập số điện thoại hợp lệ." }, 400);
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return json({ error: "Vui lòng chọn số sao từ 1 đến 5." }, 400);
    }
    if (!content || content.length < 5) {
      return json({ error: "Nội dung đánh giá cần ít nhất 5 ký tự." }, 400);
    }

    const review = await createReview({ name, phone, rating, content });

    revalidateReviewPages();

    return json({
      ok: true,
      message: "Cảm ơn bạn! Đánh giá đang được xem xét trước khi hiển thị.",
      id: review.id,
    });
  } catch (err) {
    console.error("POST /api/reviews:", err);
    return json({ error: "Không gửi được đánh giá." }, 500);
  }
}
