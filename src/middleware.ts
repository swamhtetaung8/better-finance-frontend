import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("api_token");

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"], // Includes both `/dashboard` and its subpaths
};
