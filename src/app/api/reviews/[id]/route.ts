import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const status = body.status as string;

    if (!["approved", "rejected", "pending"].includes(status)) {
      return NextResponse.json({ error: "Trạng thái không hợp lệ." }, { status: 400 });
    }

    const review = await prisma.review.update({
      where: { id },
      data: {
        status,
        role: typeof body.role === "string" ? body.role.trim() || null : undefined,
        project: typeof body.project === "string" ? body.project.trim() || null : undefined,
        image: typeof body.image === "string" ? body.image.trim() || null : undefined,
      },
    });

    return NextResponse.json(review);
  } catch (err) {
    console.error("PATCH /api/reviews/[id]:", err);
    return NextResponse.json({ error: "Cập nhật thất bại." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    await prisma.review.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/reviews/[id]:", err);
    return NextResponse.json({ error: "Xóa thất bại." }, { status: 500 });
  }
}
