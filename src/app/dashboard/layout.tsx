import LayoutComponent from "./components/layout-component";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
