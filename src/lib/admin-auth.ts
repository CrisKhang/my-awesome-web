import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";

export function getAdminToken() {
  return process.env.ADMIN_SECRET ?? "change-me-in-production";
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === getAdminToken();
}

export function checkAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD ?? "admin123";
  return password === expected;
}
