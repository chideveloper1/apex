import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // Your middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // If there's a token, the user is authenticated
        return !!token;
      },
    },
    pages: {
      signIn: "/login",
      // error: "/auth/error",
    },
  }
);

// Configure which routes are protected
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    // Add other protected routes here
  ],
};
