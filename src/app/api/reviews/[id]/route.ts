import { isAdminAuthenticated } from "@/lib/admin-auth";
import { NO_STORE_HEADERS, revalidateReviewPages } from "@/lib/revalidate-reviews";
import { deleteReview, updateReview } from "@/lib/reviews-store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = { params: Promise<{ id: string }> };

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: NO_STORE_HEADERS });
}

export async function PATCH(request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return json({ error: "Unauthorized" }, 401);
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const status = body.status as string;

    if (!["approved", "rejected", "pending"].includes(status)) {
      return json({ error: "Trạng thái không hợp lệ." }, 400);
    }

    const review = await updateReview(id, {
      status,
      role: typeof body.role === "string" ? body.role.trim() || null : undefined,
      project: typeof body.project === "string" ? body.project.trim() || null : undefined,
      image: typeof body.image === "string" ? body.image.trim() || null : undefined,
    });

    revalidateReviewPages();

    return json(review);
  } catch (err) {
    console.error("PATCH /api/reviews/[id]:", err);
    return json({ error: "Cập nhật thất bại." }, 500);
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return json({ error: "Unauthorized" }, 401);
  }

  try {
    const { id } = await params;
    await deleteReview(id);

    revalidateReviewPages();

    return json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/reviews/[id]:", err);
    return json({ error: "Xóa thất bại." }, 500);
  }
}
