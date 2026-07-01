import { revalidatePath } from "next/cache";

/** Làm mới cache trang có hiển thị đánh giá sau khi duyệt / gỡ. */
export function revalidateReviewPages() {
  revalidatePath("/");
  revalidatePath("/danh-gia");
  revalidatePath("/admin/danh-gia");
}

export const NO_STORE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  Pragma: "no-cache",
  Expires: "0",
} as const;
