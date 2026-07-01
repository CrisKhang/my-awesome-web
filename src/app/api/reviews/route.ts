import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma, toPublicReview } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const approvedOnly = searchParams.get("approved") === "true";

    if (!approvedOnly && !(await isAdminAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const reviews = await prisma.review.findMany({
      where: approvedOnly ? { status: "approved" } : undefined,
      orderBy: { createdAt: "desc" },
    });

    if (approvedOnly) {
      return NextResponse.json(reviews.map(toPublicReview));
    }

    return NextResponse.json(
      reviews.map((r) => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
      })),
    );
  } catch (err) {
    console.error("GET /api/reviews:", err);
    return NextResponse.json({ error: "Không tải được đánh giá." }, { status: 500 });
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
      return NextResponse.json({ error: "Vui lòng nhập họ tên." }, { status: 400 });
    }
    if (!phone || phone.length < 9) {
      return NextResponse.json({ error: "Vui lòng nhập số điện thoại hợp lệ." }, { status: 400 });
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Vui lòng chọn số sao từ 1 đến 5." }, { status: 400 });
    }
    if (!content || content.length < 5) {
      return NextResponse.json(
        { error: "Nội dung đánh giá cần ít nhất 5 ký tự." },
        { status: 400 },
      );
    }

    const review = await prisma.review.create({
      data: {
        name,
        phone,
        rating,
        content,
        status: "pending",
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Cảm ơn bạn! Đánh giá đang được xem xét trước khi hiển thị.",
      id: review.id,
    });
  } catch (err) {
    console.error("POST /api/reviews:", err);
    return NextResponse.json({ error: "Không gửi được đánh giá." }, { status: 500 });
  }
}
