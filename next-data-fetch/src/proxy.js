import { NextResponse } from "next/server"

export function proxy(request) {
  const { pathname } = request.nextUrl

  // ✅ Allow Next.js internal files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/login"
  ) {
    return NextResponse.next()
  }

  const token = request.cookies.get("token")

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next).*)'] // 🔥 important
}