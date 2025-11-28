export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/admin/dashboard",
    "/dashboard/home",
    "/dashboard/deposit",
    "/dashboard/deposit-history",
    "/dashboard/all-transaction",
    "/dashboard/withdraw",
    "/dashboard/refer",
    "/dashboard",
  ],
};
